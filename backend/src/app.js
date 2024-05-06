const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running!');
});

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// MongoDB connection string from environment variable
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB Atlas
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Check if MongoDB connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

const PORT = process.env.PORT || 3000; // Use environment port or 3000 as default

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
