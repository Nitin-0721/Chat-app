import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body

    if(password !== confirmPassword){
      return res.status(400).json({ message: 'Password and Confirm Password do not match' })
    }

    const user = await User.findOne({
      username
    })

    if(user){
      return res.status(400).json({ message: 'User already exists' })
    }

    //hashed password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // https://api.dicebear.com/9.x/lorelei/svg

    const boyProfilePic = `https://api.dicebear.com/9.x/lorelei/svg?seed=${username}male`
    const girlProfilePic = `https://api.dicebear.com/9.x/lorelei/svg?seed=${username}female`
    const otherProfilePic = `https://api.dicebear.com/9.x/lorelei/svg?seed=${username}human` 
    
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === 'male' ? boyProfilePic : gender === 'female' ? girlProfilePic : otherProfilePic  
    });

 if(newUser){

  //generate jwt token
  generateTokenAndSetCookie(newUser._id,res);

    await newUser.save();

    res.status(201).json({ 
      _id:newUser._id,
      fullName:newUser.fullName,
      username:newUser.username,
      profilePic:newUser.profilePic 
     });
 }else{
  res.status(400).json({ message: 'Invalid user data' });
 }
     
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal Server Error' }); 
  }
};

export const login = async (req, res) => {
  try{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");


    if(!user ||!isPasswordCorrect){
      console.log("User not found");
      return res.status(400).json({message:"Invalid username or password"});
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id:user._id,
      fullName:user.fullName,
      username:user.username,
      profilePic:user.profilePic,
    })

  }catch(error){
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' }); 
    }
  };

export const logout = (req, res) => {
  try{
    res.clearCookie('jwt',"",{maxAge:0});
    res.status(200).json({message:"Logged out successfully:"});
    
  }catch(error){
    console.error("Error during logout:", error);
    res.status(500).json({message:"Internal server error:"});
  }
};
