const {getAllUser, createUser} = require("../controllers/users.controller");

const express = require("express");
const router = express.Router();


router.get("/", getAllUser);
router.post("/", createUser);

module.exports = router;