import mongoose from "mongoose";
require ('dotenv').config();
const { URL } = process.env;  

export async function connectDB() {
    try {
      mongoose.set('strictQuery', true);
      const db = await mongoose.connect(`${URL}`);
      console.log("Database is connected to: ", db.connection.name);
    } catch (error) {
      console.error(error);
    }
  }