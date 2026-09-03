const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("Middleware Executed")
    next();
})

app.get("/", (req, res) => {
    res.end("Hello you are at Home Page");
})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
})