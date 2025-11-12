const {getAllUser, createUser, updateUser} = require("../controllers/users.controller");

const express = require("express");
const router = express.Router();


router.get("/", getAllUser);
router.post("/", createUser);
router.put("/:id", updateUser);

module.exports = router;
