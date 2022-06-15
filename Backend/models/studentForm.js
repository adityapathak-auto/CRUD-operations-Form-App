const { text } = require("express");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{required:true,type:String},
    email:{required:true,type:String,unique:true},
    age:{type:Number,required:true},
    number:{type:Number,required:true,unique:true},


},{
    timestamps:true,
})

const Student = mongoose.model("student",studentSchema);

module.exports = Student;