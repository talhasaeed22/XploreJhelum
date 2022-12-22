const express = require('express');
const bcrypt = require('bcrypt');
const user = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const room = require('../models/Room')
const booking = require('../models/Booking')
const JWT_SECRET = "thisiswebtokensecret";

var jwt = require('jsonwebtoken');

//Creating a user using POST /api/auth/signup request.
router.post('/gethotel', async (req, res) => {
    let success = false;

    try {
        let exist = await user.findOne({ email: req.body.email });
        if (exist) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        let newuser = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });
        const data = {
            user: {
                id: newuser._id
            }
        }
        success = true
        const token = jwt.sign(data, JWT_SECRET);
        res.send({ success, token });
    } catch (error) {
        res.status(500).send("Internal Server Error Occurred. Please Try Again.")
    }
})

router.post('/getrooms', async (req, res) => {
    let success = false;
    try {
        const foundRooms = await room.find({ hotel: req.body.hotel, available:'yes' }).select("-hotel");
        success = true
        res.send({ rooms: foundRooms, success: success });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ success: success, error: "Internal Server Error occurred" });
    }
})

router.put('/assignroom', async (req, res) => {
    try {

        const newRoom = {};


        newRoom.available = "no";

        let selectedroom = await room.findOne({"hotel":req.body.hotel, "number":req.body.roomNumber})
        // res.send(selectedroom)
        let editedRoom = await room.findByIdAndUpdate(selectedroom._id, { $set: newRoom }, { new: true })
        
        res.send(editedRoom)
    }
    catch (error) {
        res.status(500).send("Internal Server Error Occurred. Please Try Again.")
        console.log(error);
    }
})

router.put('/deleterequest', async (req, res) => {
    try {
        const newReq = {};


        newReq.status = "Resolved";

        let request = await booking.findByIdAndUpdate(req.body.id, { $set: newReq }, { new: true})
        
        res.send({success:true})
    } catch (error) {
        console.log(error)
    }
})

router.put('/deleteroom', async (req, res) => {
    try {

        const newRoom = {};


        newRoom.available = "yes";

        let selectedroom = await room.findOne({"hotel":req.body.hotel, "number":req.body.roomNumber})
        // res.send(selectedroom)
        let editedRoom = await room.findByIdAndUpdate(selectedroom._id, { $set: newRoom }, { new: true })

        res.send(editedRoom)
    }
    catch (error) {
        res.status(500).send("Internal Server Error Occurred. Please Try Again.")
        console.log(error);
    }
})

router.delete('/removeguest', async (req, res)=>{
    await booking.deleteOne({_id:req.body.id});
    res.send({success:true})
})

router.post('/booking',  async (req, res) => {
    try {
        let newbooking = await booking.create({
            name: req.body.name,
            email: req.body.email,
            address:req.body.address,
            days:req.body.days,
            contact:req.body.contact,
            emergencyContact:req.body.emergencyContact,
            roomNumber:req.body.roomNumber,
            hotel:req.body.hotel,
            status:req.body.status
        });
        res.send(newbooking);
    } catch (error) {
        res.status(500).send("Internal Server Error Occurred. Please Try Again.")
    }
})

router.post('/getrequest', async (req, res) => {
    let success = false;
    try {
        const foundRequests = await booking.find({ hotel: req.body.hotel, status:"Pending" });
        success = true
        res.send({ requests: foundRequests, success: success });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ success: success, error: "Internal Server Error occurred" });
    }
})

router.post('/getguests', async (req, res) => {
    let success = false;
    try {
        const foundRequests = await booking.find({ hotel: req.body.hotel, status:"Resolved" });
        success = true
        res.send({ requests: foundRequests, success: success });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ success: success, error: "Internal Server Error occurred" });
    }
})

module.exports = router