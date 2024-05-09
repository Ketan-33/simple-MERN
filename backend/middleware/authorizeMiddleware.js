// backend/middleware/authorizeMiddleware.js
const authorize = (req, res, next) => {
  const { role } = req.user;

  if (role === 'admin') {
    next();
  } else {
    res.status(403).json({ error: 'Unauthorized' });
  }
};

module.exports = { authorize };
