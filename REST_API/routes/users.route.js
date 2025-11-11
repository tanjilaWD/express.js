const getAllUser = require("../controllers/users.controller");

const express = require("express");
const router = express.Router();


router.get("/", getAllUser);

module.exports = router;