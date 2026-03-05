import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import authService from '../services/authService';
import { useLocalStorage } from '../hooks/useLocalStorage';

const LoginPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Custom hook to persist the username
    const [persistedUser, setPersistedUser] = useLocalStorage('rememberedUser', '');

    const handleLogin = async ({ username, password }) => {
        setIsLoading(true);
        setError('');

        try {
            const data = await authService.login(username, password);

            // Success logic
            setPersistedUser(username); // Save for persistence requirement
            navigate('/welcome');
        } catch (err) {
            // Error handling for 401 or 400 status codes
            setError(err.message || 'Invalid credentials. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
                    <p className="text-gray-500">Please enter your details to login</p>
                </div>

                <LoginForm
                    onSubmit={handleLogin}
                    initialUsername={persistedUser}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default LoginPage;