// postRoutes.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import the authenticateUser middleware

// Get all posts (protected route)
router.get('/api/posts', authenticateUser, async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a post by ID
router.get('/api/posts/:postId', authenticateUser, async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create a new post
router.post('/api/posts', authenticateUser, async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a post by ID
router.put('/api/posts/:postId', authenticateUser, async (req, res) => {
  const { postId } = req.params;

  try {
    const updatedPost = await Post.findByIdAndUpdate(postId, req.body, { new: true });
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a post by ID
router.delete('/api/posts/:postId', authenticateUser, async (req, res) => {
  const { postId } = req.params;

  try {
    await Post.findByIdAndDelete(postId);
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
