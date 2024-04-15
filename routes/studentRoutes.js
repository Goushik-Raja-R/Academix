const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/courses', studentController.getAllCourses);
router.get('/courses/:id', studentController.getCourseById);
router.post('/courses/:id/enroll', studentController.enrollCourse);
router.get('/courses/:id/assignments', studentController.getAssignments);

module.exports = router;
