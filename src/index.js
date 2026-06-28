import "./env.js";

import connectDB from "./db/index.js";
import { app } from "./app.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server is running at port http://localhost:${process.env.PORT}`,
      );
    });
  })
  .catch((error) => {
    console.log("Mongodb connection failed!!");
  });
