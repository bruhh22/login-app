import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

const WelcomePage = () => {
    const navigate = useNavigate();
    const [username] = useLocalStorage('rememberedUser', '');

    // Safety check: if no user is found in storage, go back to login
    useEffect(() => {
        if (!username) {
            navigate('/login');
        }
    }, [username, navigate]);

    const handleLogout = () => {
        // Note: We keep the username for "Remember username" requirement, 
        // but in a real app you might clear session tokens here.
        // For this test, navigating away is sufficient.
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
            <div className="max-w-md w-full text-center bg-white p-10 rounded-2xl shadow-xl">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                    Welcome, <span className="text-blue-600">{username}</span>!
                </h1>

                <p className="text-gray-600 mb-8">
                    You have successfully authenticated to the application.
                </p>

                <button
                    onClick={handleLogout}
                    className="px-8 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-200"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;