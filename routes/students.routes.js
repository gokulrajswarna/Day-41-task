const express = require('express');
const router = express.Router();
const Students = require("../model/students.model");

//To show all the student details with assigned student
router.get("/students", (req, res) => {
    try{
        Students.find((err, data) =>{
            if(err){
                return res.status(400).send({
                    message: "Error While getting the student list"
                });
            };
            return res.status(200).send(data);
        });
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        });
    };
});

//To show the students details with particular student information to assigned mentor
router.get("/students/:studentId", (req, res) => {
    try{
        Students.find({_id: req.params.studentId}, (err, data) =>{
            if(err){
                return res.status(400).send({
                    message: "Error While getting the students information"
                });
            };
             res.status(200).send(data);
        });
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        });
    };
});

//To create the student details with assigned mentor
router.post("/students/create", (req, res) => {
    try{
        let students = new Students(req.body);

        students.save((err, data) =>{
            if(err){
                return res.status(400).send({
                    message: "Error While adding a new student information"
                });
            };
            res.status(201).send({
                ID: data._id,
                message: "New student information has been added successfully" 
            });
        });
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        });
    };
});

//To edit the mentor details with particular mentor to assigned student
router.put("/students/update/:studentId", (req, res) => {
    try{
        Students.findByIdAndUpdate( {_id: req.params.studentId}, {$set: req.body}, (err, data) =>{
            if(err){
                return res.status(400).send({
                    message: "Error While updating the exisiting student information"
                });
            };
            res.status(200).send({
                ID: data._id,
                message: "Student information has been updated successfully" 
            });
        });
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        });
    };
});

//To delete the student details with assigned student
router.delete("/students/delete/:studentId", (req, res) => {
    try{
        Students.deleteOne( {_id: req.params.studentId}, (err, data) =>{
            if(err){
                return res.status(400).send({
                    message: "Error While deleting the exisiting student information"
                });
            };
            res.status(200).send({
                ID: data._id,
                message: "Student information has been deleted successfully" 
            });
        });
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        });
    };
});

module.exports = router;