const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

const getAllUsers = async () => {
  const users = await User.find({}).exec();
  return users;
};

const createNewUser = async (name) => {
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    name: name,
  });
  await newUser.save();
  return newUser;
};

const findUserById = async (id) => {
  const user = await User.findOne({ _id: id }).exec();
  return user.name;
};

module.exports = {
  User,
  getAllUsers,
  createNewUser,
  findUserById,
};
