import dotenv from "dotenv";
// dotenv return the object and we are calling that config function
// so that you can get your environment varibles
// the moment you call Inside the process global you have the property env
// all the environment varubles which are mentioned here are going to be loaded inside this object(proccess.env)
dotenv.config();

export const settings = {
  PORT: process.env.PORT,
};
