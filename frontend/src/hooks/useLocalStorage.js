import { useState, useEffect } from 'react';

/**
 * Custom hook to manage synchronization between state and localStorage.
 * Perfect for remembering usernames or session data.
 */
export const useLocalStorage = (key, initialValue) => {
    // Initialize state with value from localStorage or fallback
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    // Update localStorage whenever the state changes
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};