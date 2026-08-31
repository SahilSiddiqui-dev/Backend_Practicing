const express = require("express");
const app = express();
const port = 3000;

const users = [
    {   id : 0,
        name: "Sahil",
        age: 22,
        skill: "backend"
    },
    {   
        id : 1,
        name : "John",
        age : 25,
        skill : "frontend"
    }
   ]

function getUserById(id) {
 const user = users.find((u) => u.id == id);
     return user ? user : null;
}

app.get("/", (req, res) => {
    res.send("Hello from our Node.js backend server!");
})  

app.get("/about", (req, res) => {
    res.json(users);
})

app.get("/api/users/:id/name", (req, res) => {
    const userId = parseInt(req.params.id);
    const userName = getUserById(userId);

    if(userName){
        res.json({name : userName.name});
    }
    else {
        res.status(404).send({ message: "User not found" });
    }
})

app.get("/api/users/:id/skill", (req, res) => {
    const userId = parseInt(req.params.id);
    const userSkill = getUserById(userId);

    if(userSkill) {
        res.send({Skill : userSkill.skill});
    }
    else {
        res.status(404).json({message : "User not found" });
    }
    
})

app.use((req, res) => {
    res.status(404).send({ message: "Requested page is not found on the server" });
})

app.listen(port, () => {
    console.log("Server running at http://localhost:3000/");
})