import app from "./src/app.js";
import { connectDB } from "./src/configs/db.config.js";
import { PORT } from "./src/configs/env.config.js";

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();