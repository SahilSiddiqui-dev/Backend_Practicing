require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./students.js');
const teacherRoutes = require('./teacher.js');
const checkRole = require('./role_middleware');
const app = express();
const port = 3000;


app.use((req, res, next) => {
  console.log("Request coming from ", req.originalUrl);
  console.log("Request method is ", req.method);
  next();
});


mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to mongodb", err);
});

app.use(express.json());
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);



app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});