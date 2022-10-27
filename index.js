const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const cors = require('cors');
const courses = require('./data/courses.json');
const courseDetails = require('./data/courseDetails.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!22222222222')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course_details = courseDetails.filter(n => n.category_id === id);
    res.send(course_details);
})

app.get('/single_course_details/:id', (req, res) => {
    const id = req.params.id;
    const selected_course_details = courseDetails.find(n => n._id === id);
    res.send(selected_course_details);
})

app.get('/check_out/:id', (req, res) => {
    const id = req.params.id;
    const selected_course_check_out = courseDetails.find(n => n._id === id);
    res.send(selected_course_check_out);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})