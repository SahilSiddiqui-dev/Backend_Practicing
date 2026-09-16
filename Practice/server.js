const express = require('express');
const app = express();
const square = require('./square.js');
const rectangle = require('./rectangle.js');

app.use('/square', square);
app.use('/rectangle', rectangle);

app.listen(3000, ()=>{
    console.log("Server Started at http://localhost:3000");
})