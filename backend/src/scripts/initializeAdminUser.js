const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Create initial administrator user
const createAdminUser = async () => {
    try {
        const existingAdmin = await User.findOne({ username: 'admin' });
        if (existingAdmin) {
            console.log('Administrator user already exists.');
            return;
        }
        const hashedPassword = await bcrypt.hash('admin123', 8);
        const adminUser = new User({
            username: 'admin',
            email: 'admin@example.com',
            password: hashedPassword
        });
        await adminUser.save();
        console.log('Administrator user created successfully.');
    } catch (error) {
        console.error('Error creating administrator user:', error);
    } finally {
        mongoose.connection.close();
    }
};

createAdminUser();
