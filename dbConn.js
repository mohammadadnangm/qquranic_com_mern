const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

//connection with mongodb localhost
// const LocalDB = process.env.LOCALDATABASE;
// mongoose
//   .connect(LocalDB, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Local DB connection is successfull");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //connection with mongodb online server
const LiveDB = process.env.DATABASE;
mongoose
  .connect(LiveDB, { useUnifiedTopology: true, useNewUrlParser: true })

  .then(() => {
    console.log("Live DB Connected successfully.");
  })
  .catch((err) => {
    console.log(err);
  });
