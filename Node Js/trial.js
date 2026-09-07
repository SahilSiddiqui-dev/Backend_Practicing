const express = require('express');
const app = express();
const teacherRouter = require('./teacher')

app.use(express.json());

app.use((req, res, next) => {
    app.use('/teachers', teacherRouter, (req, res, next));
    console.log(`${req.method} ${req.url}`);
    next();
})

app.get("/", (req, res, next) => {
    try {
        res.end("Hello you are at Home Page");
    } catch (err) {
        next(err);
    }
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Something went wrong");
})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
})