import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://thummarayush05_db_user:lrGsL0ZJRkfPZCkn@cluster0.nuevcyz.mongodb.net/portfolio?retryWrites=true&w=majority";

let connPromise = null;
let lastError = null;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (mongoose.connection.readyState === 2 && connPromise) {
    try {
      await connPromise;
      return mongoose.connection;
    } catch (e) {
      // Continue to retry below
    }
  }

  try {
    connPromise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });
    const conn = await connPromise;
    lastError = null;
    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host} (db: ${conn.connection.name})`);
    return conn;
  } catch (error) {
    connPromise = null;
    lastError = error.message;
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    throw error;
  }
};

export const getLastError = () => lastError;
export default connectDB;

