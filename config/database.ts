import mongoose from 'mongoose';

let connected = false;

export const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if (connected) {
    console.log('MongoDB is connected');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
    connected = true;
  } catch (err) {
    console.warn(err);
  }
};
