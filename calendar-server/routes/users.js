const express = require("express");
const controller = require("../controllers/users");

const router = express.Router();

router.get("/", controller.getAllUsers);

router.post("/", controller.createNewUser);

module.exports = router;
