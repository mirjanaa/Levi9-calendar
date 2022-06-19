const express = require("express");
const controller = require("../controllers/users");

const router = express.Router();

router.get("/", controller.getAllUsers);
router.get("/:id", controller.findUserById);

router.post("/", controller.createNewUser);

module.exports = router;
