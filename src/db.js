import mongoose from "mongoose";
const username = process.env.USER;
const psw = process.env.PASSWORD;

export const conectDb = async () => {
  try {
    console.log(username, psw);
    await mongoose.connect(
      `mongodb+srv://${username}:${psw}@rtn.htpiuat.mongodb.net/RTNDBretryWrites=true&w=majority`
    );
    console.log(">>>>> DB IS CONNECTED");
  } catch (error) {
    console.log(error);
  }
};
