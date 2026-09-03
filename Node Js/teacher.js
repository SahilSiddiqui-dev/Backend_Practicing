const express = require("express");
const router = express.Router();
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

router.use(express.json());

router.get("/", (req, res) => {
    if(teachers){
        res.status(200).json(teachers);
    }
})

router.post("/", (req, res) => {
    const name = req.body.name;
    const subject = req.body.subject;
    if(!name || !subject) return res.status(404).json({message : "Name was not found"});

    const newTeacher = {
        id : teachers.length > 0 ? Math.max(...teachers.map(s => s.id)) + 1 : 1,
        name : name,
        subject : subject
    }
    teachers.push(newTeacher);

    res.status(200).json({
        message : "Successfully Added New Teacher",
        Teacher : newTeacher
    })
    

})

router.patch("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const teacher = teachers.find(t => t.id === id);
    if(!teacher) res.status(404).json({message : "Teacher was not found"});
    teacher.subject = req.body.subject;
    res.status(200).json({ message : "Skill updated"})

})

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const teacher = teachers.find(t => t.id === id);
    if(!teacher) res.status(404).json({message : "Teacher was not found"});
    if(!req.body.name || !req.body.subject) {
        res.status(404).json({message : "Name OR Subject is not given"});
    }
    teacher.name = req.body.name;
    teacher.subject = req.body.subject;
    res.status(404).json({message : "Data is Updated"})
})

module.exports = router;
