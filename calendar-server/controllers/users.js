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

const findUserById = async (req, res, next) => {
  const id = req.params.id;

  try {
    if (!id) {
      const error = new Error("Please provide all input fields!");
      error.status = 400;
      throw error;
    }
    const userName = await userService.findUserById(id);
    if (userName == null) {
      res.status(404).json();
    } else {
      res.status(200).json(userName);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  findUserById,
};
