import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: '15d'
  })

  res.cookie('jwt', token, {
    httpOnly: true, //it prevents client-side JavaScript from accessing the cookie, enhancing security against XSS attacks.
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict', //csrf attack se bachane ke liye, ye ensure karta hai ki cookie sirf same site ke requests ke sath hi bheji jaye.
    maxAge: 15 * 24 * 60 * 60 * 1000
  });
};

export default generateTokenAndSetCookie;
