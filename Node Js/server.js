const express = require('express');
const studentRoutes = require('./post.js');
const teacherRouter  = require('./teacher.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/students', studentRoutes);
app.use('/teachers', teacherRouter);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});