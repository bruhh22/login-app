// import app from './src/app.js';
// import { config } from './src/config/env.js';

// const PORT = config.PORT;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

import app from './src/app.js';
import { config } from './src/config/env.js';

const PORT = config.PORT;

app.listen(PORT, () => {
    console.log(`
--------------------------------------------------
🚀 Server is running on port: ${PORT}
🌍 Environment: ${config.NODE_ENV}
📡 CORS Allowed Origin: ${config.FRONTEND_URL}
--------------------------------------------------
    `);
});