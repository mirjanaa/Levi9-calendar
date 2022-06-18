const meetingService = require("../models/meetings");

const getAllMeetings = async (req, res, next) => {
  try {
    const meetings = await meetingService.getAllMeetings();
    res.status(200).json(meetings);
  } catch (error) {
    next(error);
  }
};

const getMeetingDetails = async (req, res, next) => {
  const id = req.params.id;

  try {
    const meeting = await meetingService.getMeetingDetails(id);
    if (meeting == null) {
      res.status(404).json();
    } else {
      res.status(200).json(meeting);
    }
  } catch (error) {
    next(error);
  }
};

const createNewMeeting = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const time = req.body.time;
  const participants = req.body.participants;
  const day = req.body.day;

  try {
    if (!title || !description || !time || !participants || !day) {
      const error = new Error("Please provide all input fields!");
      error.status = 400;
      throw error;
    }

    const meeting = await meetingService.createNewMeeting(
      title,
      description,
      time,
      participants,
      day
    );
    res.status(201).json(meeting);
  } catch (error) {
    next(error);
  }
};

const deleteMeeting = async (req, res, next) => {
  const id = req.params.id;

  try {
    await meetingService.deleteMeeting(id);
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMeetings,
  getMeetingDetails,
  createNewMeeting,
  deleteMeeting,
};
