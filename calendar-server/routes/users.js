const express = require("express");
const controller = require("../controllers/users");

const router = express.Router();

router.get("/", controller.getAllUsers);

module.exports = router;
