const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let students = [
    {
        id : 0,
        name : "Sahil",
        age : 22,
    },
    {
        id : 1,
        name : "Alice",
        age : 25
    }
];

app.post("/api/students", (req, res) => {
    if (!req.body.name || !req.body.age) {
        return res.status(400).json({message: "Name and age are required"});
    }
    const newUser = {
        id : students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
        name : req.body.name,
        age : req.body.age
    }
    students.push(newUser);

    res.status(201).json({
        message : "user created successfully", 
        students : newUser
    })
   
})
app.delete("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const initialLen = students.length;

    students = students.filter((u) => u.id !== id);
    if(students.length < initialLen){

        res.status(200).json({message : "Successfully deleted"})
    }
    else {
        res.status(404).json({message : "user not found"})
    }
    
})

app.get("/api/students", (req, res) => {
    res.status(200).json({students : students});
})

app.get("/search", (req, res) => {
    const name =  req.query.name;
    if(!name) {
        return res.status(404).json({message : "name was not found"});
    }
    const req_student = students.filter((s) => s.name.toLowerCase() === name.toLowerCase());
    res.status(200).json({req_student});
})  

// app.use((req, res) => {
//     res.status(404).send({ message: "Requested page is not found on the server" });
// })


app.listen(port, () => {
    console.log("Server running at http://localhost:3000/");
})