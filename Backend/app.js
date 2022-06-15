const express = require("express");
const mongoose = require("mongoose");

const connect = ()=>{
   return mongoose.connect("mongodb+srv://aditya:12345@cluster0.fdxrk.mongodb.net/students?retryWrites=true&w=majority")
}

const app = express();

app.listen( 5000, async()=>{
await connect();
console.log("listening on port 5000");
});



app.use(express.json());

const studentFormController = require("./controller/studentFormController");

app.use("/student",studentFormController);

module.exports = app;

