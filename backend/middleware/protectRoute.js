import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt // Assuming the token is stored in a cookie named 'jwt'

    if (!token) {
      return res
        .status(401)
        .json({ message: 'Unauthorized - No token provided' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
      return res.status(401).json({ message: 'Unauthorized - Invalid token' })
    }

    const user = await User.findById(decoded.userId).select('-password')

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized - User not found' })
    }

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized - User not found' })
    }

    req.user = user // Attach user info to the request object
    next() // Proceed to the next middleware or route handler
  } catch (error) {
    console.log('Error in protectRoute middleware:', error)
    res.status(401).json({ message: 'Unauthorized' })
  }
}

export default protectRoute
