const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  day: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  time: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  description: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  participants: {
    type: [mongoose.Schema.Types.String],
    required: true,
  },
});

const Meeting = mongoose.model("Meeting", meetingSchema);

const getAllMeetings = async () => {
  const meetings = await Meeting.find({}).exec();
  return meetings;
};

const getMeetingDetails = async (id) => {
  const meeting = await Meeting.findOne({ _id: id }).exec();
  return meeting;
};

const createNewMeeting = async (
  title,
  description,
  time,
  participants,
  day
) => {
  const meeting = new Meeting({
    _id: new mongoose.Types.ObjectId(),
    title: title,
    time: time,
    description: description,
    participants: participants,
    day: day,
  });
  await meeting.save();
  return meeting;
};

const deleteMeeting = async (id) => {
  await Meeting.findOneAndDelete({ _id: id }).exec();
};

module.exports = {
  Meeting,
  getAllMeetings,
  getMeetingDetails,
  createNewMeeting,
  createNewMeeting,
  deleteMeeting,
};
