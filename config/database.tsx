import mongoose from "mongoose";

let connected = false;

const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("Mongodb already connected");
    return;
  }
  const { MONGODB_USER, MONGODB_URI, MONGODB_PASSWORD, MONGODB_APP_NAME } =
    process.env;
  try {
    await mongoose.connect(MONGODB_URI!, {
      user: MONGODB_USER,
      pass: MONGODB_PASSWORD,
      retryWrites: true,
      appName: MONGODB_APP_NAME,
    });
    connected = true;
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;
