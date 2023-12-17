import mongoose from "mongoose";
let isConnnected = false; //track the connection status
export const connectToDb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnnected) {
    console.log("already connected to mongodb!Using existing connection");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI,{
        dbName:process.env.DB_NAME,
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    isConnnected = true;
    console.log("connected to mongodb!")
  } catch (error) {
    console.log("error connecting to mongodb", error);
  }
};
