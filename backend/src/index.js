
import dotenv from "dotenv";

dotenv.config();

import { app } from "./app.js";


connentdb()
  .then(
    () => {
      app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running on ${process.env.PORT || 8000}`)
      })
      app.on("error", (error) => {
        console.log("App Error:", error);
        throw error;
      }) 
      
      
    }

  )
  .catch((error) => {
    console.log(`connection failed,${error}`)
  })
  