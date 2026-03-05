import React, { useState } from 'react';

/**
 * Pure UI Component for the Login Form.
 * Handles internal input state and submits data to the parent container.
 */
const LoginForm = ({ onSubmit, initialUsername, isLoading, error }) => {
    const [username, setUsername] = useState(initialUsername || '');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) return;
        onSubmit({ username, password });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                    {error}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none border-gray-300"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none border-gray-300"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2 px-4 rounded-md font-semibold text-white transition-colors 
          ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
                {isLoading ? 'Signing in...' : 'Login'}
            </button>
        </form>
    );
};

export default LoginForm;