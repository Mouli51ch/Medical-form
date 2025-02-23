import { app } from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 8000;

// Function to connect to MongoDB
const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MONGO db connection failed !!!', error);
      process.exit(1); // Exit process with failure
    }
  }
};

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('MONGO db connection failed !!!', err);
  });