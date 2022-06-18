const userService = require("../models/users");

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await userService.getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

const createNewUser = async (req, res, next) => {
  const name = req.body.name;

  try {
    if (!name) {
      const error = new Error("Please provide all input fields!");
      error.status = 400;
      throw error;
    }
    const user = await userService.createNewUser(name);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
};
