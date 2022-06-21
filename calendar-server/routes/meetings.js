const express = require('express');
const controller = require('../controllers/meetings');

const router = express.Router();

router.get('/', controller.getAllMeetings);
router.get('/:id', controller.getMeetingDetails);

router.post('/', controller.createNewMeeting);

router.delete('/:id', controller.deleteMeeting);

module.exports = router;