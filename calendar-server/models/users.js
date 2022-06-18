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

module.exports = {
  User,
  getAllUsers,
};
