const express = require('express');
const router = express.Router();
const Mentors = require("../model/mentors.model");

//To show all the mentor details with assigned student
router.get("/mentors", (req, res) => {
    try{
        Mentors.find((err, data) =>{
            if(err){
                return res.status(400).send({
                    message: "Error While getting the mentors list"
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

//To show the mentor details with particular mentor information to assigned student
router.get("/mentors/:mentorId", (req, res) => {
    try{
        Mentors.find({_id: req.params.mentorId}, (err, data) =>{
            if(err){
                return res.status(400).send({
                    message: "Error While getting the mentors information"
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

//To create the mentor details with assigned student
router.post("/mentors/create", (req, res) => {
    try{
        let mentors = new Mentors(req.body);

        mentors.save((err, data) =>{
            if(err){
                return res.status(400).send({
                    message: "Error While adding a new mentor information"
                });
            };
            res.status(201).send({
                ID: data._id,
                message: "New mentor information has been added successfully" 
            });
        });
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        });
    };
});

//To edit the mentor details with particular mentor to assigned student
router.put("/mentors/update/:mentorId", (req, res) => {
    try{
        Mentors.findByIdAndUpdate( {_id: req.params.mentorId}, {$set: req.body}, (err, data) =>{
            if(err){
                return res.status(400).send({
                    message: "Error While updating the exisiting mentor information"
                });
            };
            res.status(200).send({
                ID: data._id,
                message: "Mentor information has been updated successfully" 
            });
        });
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        });
    };
});

//To delete the mentor details with assigned student
router.delete("/mentors/delete/:mentorId", (req, res) => {
    try{
        Mentors.deleteOne( {_id: req.params.mentorId}, (err, data) =>{
            if(err){
                return res.status(400).send({
                    message: "Error While deleting the exisiting mentor information"
                });
            };
            res.status(200).send({
                ID: data._id,
                message: "Mentor information has been deleted successfully" 
            });
        });
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        });
    };
});

module.exports = router;