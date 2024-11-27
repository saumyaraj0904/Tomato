import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tomato:tomato@cluster0.zpnwxej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/tomato').then(() =>console.log("DB Connected sahil"));
}        
