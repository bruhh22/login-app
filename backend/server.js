import app from './src/app.js';
import { config } from './src/config/env.js';

const PORT = config.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});