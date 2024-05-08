// authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Middleware for user authentication
const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is missing' });
  }

  try {
    const decoded = jwt.verify(token, 'M3NJVc4Sr06mBPAhNp8WTrUzTVkFEDgc5GvthTimnXHWy');
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { authenticateUser };
