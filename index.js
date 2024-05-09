import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from './routes/userRoute.js';

dotenv.config();

const app = express();

// Connect to the database
databaseConnection();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Define CORS options
const corsOptions = {
    origin: ['http://localhost:3000', 'https://main--netflix.netlify.app'],
    credentials: true
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Routes
app.use('/api/v1/user', userRoute);

// Get the port from environment variables or use a default port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
