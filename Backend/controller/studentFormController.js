const Student = require("../models/studentForm");

const express = require("express");
const router = express.Router();

router.post("/",async(req,res)=>{
    const student =await Student.create(req.body);
    return res.send(student).status(200);

})

router.get("/",async(req,res)=>{
    const students = await Student.find().lean().exec();

    return res.send(students).status(201);
});

router.get("/getstudent/:id", async(req,res)=>{
    const student = await Student.findById(req.params.id).lean().exec();

    return res.send(student).status(203);
});

router.get("/:id",async(req,res)=>{
    const student = await Student.findByIdAndDelete(req.params.id).lean().exec();

    // return res.send(student).status(202);

});

router.patch("/update/:id",async(req,res)=>{
    const student = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});

    res.send(student).status(204);
})



module.exports= router;