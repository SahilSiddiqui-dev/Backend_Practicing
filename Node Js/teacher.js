const express = require("express");
const app = express();
const port = 3000;
const teachers = [
    {
        id: 1,
        name: "John",
        subject: "Math"
    },
    {
        id : 2,
        name : "Alice",
        subject : "Science"
    },
    {
        id : 3,
        name : "Bob",
        subject : "History"
    },
    {
        id : 4,
        name : "Eve",
        subject : "English"
    }
];

app.use(express.json());

app.get("api/teachers", (req, res) => {
    if(teachers){
        res.status(200).json(teachers);
    }
})

app.post("api/teachers", (req, res) => {
    const name = req.body.name;
    const subject = req.body.name;
    if(!name || !subject) return res.status(404).json({message : "Name was not found"});

    const newTeacher = {
        id : teachers.length > 0 ? Math.max(...teachers.map((s => s.id)) + 1) : 1,
        name : name,
        subject : subject
    }
    teachers.push(newTeacher);

    res.status(200).json({
        message : "Successfully Added New Teacher",
        Teacher : 
    })
    

})

app.listen(port, () => {
    console.log("server running at http://localhost3000");
})


