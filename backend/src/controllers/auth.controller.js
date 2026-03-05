/**
 * Handles the login logic
 * POST /api/login
 */
export const login = (req, res, next) => {
    try {
        const { username, password } = req.body;

        // 1. Validation: Return 400 Bad Request if fields are missing
        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required."
            });
        }

        // 2. Credential Check: Strictly admin / admin
        if (username === 'admin' && password === 'admin') {
            return res.status(200).json({
                message: "Login successful",
                username: "admin"
            });
        }

        // 3. Unauthorized: Invalid credentials
        return res.status(401).json({
            message: "Invalid username or password."
        });

    } catch (error) {
        // Pass unexpected errors to the global error handler
        next(error);
    }
};