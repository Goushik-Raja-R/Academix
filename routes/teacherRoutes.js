const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teachersController');

router.get('/courses', teacherController.getAllCourses);
router.post('/courses', teacherController.createCourse);
router.get('/courses/:id', teacherController.getCourseById);
router.put('/courses/:id', teacherController.updateCourse);
router.delete('/courses/:id', teacherController.deleteCourse);

module.exports = router;
