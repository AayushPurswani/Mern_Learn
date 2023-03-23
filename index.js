const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require("./models/Users")

mongoose.connect(
    "mongodb+srv://Master_Wizard:mynameis@mern.godthj7.mongodb.net/merntutorial?retryWrites=true&w=majority"
    );

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => { 
        if(err){
            res.json(err);
        }else {
            res.json(result);
        }
    });
});

app.post("/createUsers", async (req,res) => {
    const users = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
});

app.listen(3001,() => {
    console.log("Server actually runs!");
});

