/* eslint-disable no-console */

import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";

let server: Server;


const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL)
  
  console.log("connected to DB");
server = app.listen(5000, () => {
    console.log(`the port is listening to ${envVars.PORT}`);
  });
  } catch (error) {
    console.log(error);
    
  }
  
}

startServer()

process.once("SIGTERM", () => {
  console.log("SIGTERM SIGNAL RECIEVED ... Server shutting down ..");

  if (server) {
    server.close(() => {
      process.exit(1);
    })
   
  }
})

// Promise.reject(new Error("i forgot to catch this promise"))

// unhandled rejection error
// throw new Error ("i forgot to handle this local error")