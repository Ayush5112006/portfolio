import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://thummarayush05_db_user:lrGsL0ZJRkfPZCkn@cluster0.nuevcyz.mongodb.net/portfolio?retryWrites=true&w=majority";

let lastError = null;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 6000,
    });
    lastError = null;
    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host} (db: ${conn.connection.name})`);
    return conn;
  } catch (error) {
    lastError = error.message;
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
  }
};

export const getLastError = () => lastError;
export default connectDB;

