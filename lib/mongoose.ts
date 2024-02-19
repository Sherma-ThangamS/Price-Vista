import mongoose from 'mongoose';

let isConnected = false;// Variable to track the connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(!"mongodb+srv://Sherma:Sherma@sst.ps6ceqg.mongodb.net/?retryWrites=true&w=majority") return console.log('MONGODB_URI is not defined');

  if(isConnected) return console.log('=> using existing database connection');

  try {
    await mongoose.connect("mongodb+srv://Sherma:Sherma@sst.ps6ceqg.mongodb.net/?retryWrites=true&w=majority");

    isConnected = true;

    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error)
  }
}
