// api.js
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api'; // Update with your backend API URL

export const fetchContentList = async () => {
    try {
        const response = await axios.get(`${apiUrl}/content`);
        return response.data;
    } catch (error) {
        console.error('Error fetching content list:', error);
        throw error;
    }
};

// Add more functions for other API endpoints as needed
