import mongoose from "mongoose";

// Cached connection for serverless reuse
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  const uri =
    process.env.MONGODB_URI ||
    "mongodb+srv://thummarayush05_db_user:lrGsL0ZJRkfPZCkn@cluster0.nuevcyz.mongodb.net/portfolio?retryWrites=true&w=majority";

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, {
        bufferCommands: false,
      })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
