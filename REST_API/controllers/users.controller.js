const users = require("../models/users.model");

const getAllUser = (req,res)=>{
    res.status(200).json({users})
};

module.exports = getAllUser;