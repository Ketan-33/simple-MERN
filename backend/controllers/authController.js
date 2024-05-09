// backend/middleware/authController.js

const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({ userId }, 'M3NJVc4Sr06mBPAhNp8WTrUzTVkFEDgc5GvthTimnXHWy', { expiresIn: '1h' });
};

module.exports = { generateToken };
