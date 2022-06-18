const userService = require("../models/users");

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await userService.getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
};
