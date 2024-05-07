// auth.js
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api'; // Update with your backend API URL

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${apiUrl}/login`, { username, password });
        localStorage.setItem('token', response.data.token);
        return true;
    } catch (error) {
        console.error('Login error:', error);
        return false;
    }
};

export const signup = async (username, email, password) => {
    try {
        const response = await axios.post(`${apiUrl}/signup`, { username, email, password });
        localStorage.setItem('token', response.data.token);
        return true;
    } catch (error) {
        console.error('Signup error:', error);
        return false;
    }
};
