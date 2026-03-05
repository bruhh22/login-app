import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

/**
 * Centralized service for Authentication API calls.
 */
const authService = {
    /**
     * Validates credentials with the Node.js backend
     * @param {string} username 
     * @param {string} password 
     * @returns {Promise}
     */
    login: async (username, password) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, {
                username,
                password,
            });
            return response.data;
        } catch (error) {
            // Propagate the specific error response from the backend
            throw error.response ? error.response.data : new Error('Network Error');
        }
    }
};

export default authService;