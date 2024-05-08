const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    // Add other fields as needed
}, { timestamps: true });

const Content = mongoose.model('Post', PostSchema);

