// /**
//  * Global Error Handling Middleware
//  */
// const errorHandler = (err, req, res, next) => {
//     console.error(err.stack);

//     res.status(500).json({
//         message: "Internal Server Error",
//         error: process.env.NODE_ENV === 'development' ? err.message : {}
//     });
// };

// export default errorHandler;

/**
 * Global Error Handling Middleware
 */
const errorHandler = (err, req, res, next) => {
    console.error(`[Server Error] ${err.stack}`);

    const status = err.status || 500;

    res.status(status).json({
        message: "Internal Server Error",
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
};

export default errorHandler;