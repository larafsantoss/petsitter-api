const mongoose = require('mongoose');
var User = require('../models/user.model');

exports.getUsers = async (req, res) => {
    try{
        let users = await User.find({});
      
        if(users) {
            return res.status(202).json(users);
        }else {
            return res.status(400).json({message: 'An error has occured!'});
        } 
        
        
    }catch (error) {
        return res.status('400').send(error);
    }

};

exports.getUser = async (req, res) => {
    try {
        let user = await User.findById({_id: req.params.id});

        if(user) {
            return res.status(202).json(user);
        }else {
            return res.status(400).json({message:'An error has occured.'});
        }
       
    } catch (error) {
        return res.status(400).send({message: "User not found."});
    }
};


exports.createUser = async (req, res) => {
    try {
        var user = req.body;

        const newUser = await User.create(user);

        if(newUser) {
            return res.status(201).send({ message: "User created!", data: newUser });
        } else {
            return res.status(400).send({ message: "An error has occured! User not created!" });
        }
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const user = req.body;

        const userUpdated = await User.findByIdAndUpdate(mongoose.Types.ObjectId(userId), { $set: user }, { new: true });

        if (userUpdated) {
            return res.status(202).json({ message: "User Updated", data: userUpdated });
        } else {
            return res.status(400).json({ message: "An error has occured! User not updated!"});
        }

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.deleteOne({ _id: userId });

        if (deletedUser.n > 0) {
            return res.status(200).json({ message: "User deleted" });
        } else {
            return res.status(400).json({ message: "Sorry, user not deleted!" });
        }
    } catch (error) {
        return res.status(400).send(error);
    }
};