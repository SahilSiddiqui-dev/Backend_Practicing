const express = require('express');
const router = express.Router();
const StudentSchema = require('./studentModel.js')

let students = [
  {
    id: 0,
    name: 'Sahil',
    age: 22,
  },
  {
    id: 1,
    name: 'Alice',
    age: 25,
  },
];

router.post('/', (req, res) => {
  if (!req.body.name || !req.body.age) {
    return res.status(400).json({ message: 'Name and age are required' });
  }

  const newUser = {
    id: students.length > 0 ? Math.max(...students.map(s=> s.id)) + 1 : 1,
    name: req.body.name,
    age: req.body.age,
  };

  students.push(newUser);

  res.status(201).json({
    message: 'User created successfully',
    student: newUser,
  });
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const initialLen = students.length;

  students = students.filter((user) => user.id !== id);

  if (students.length < initialLen) {
    return res.status(200).json({ message: 'Successfully deleted' });
  }

  return res.status(404).json({ message: 'User not found' });
});

router.get('/', (req, res) => {
  res.status(200).json({ students });
});

router.get('/search', (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(404).json({ message: 'Name was not found' });
  }

  const filteredStudents = students.filter(
    (student) => student.name.toLowerCase() === String(name).toLowerCase()
  );

  return res.status(200).json({ students: filteredStudents });
});

module.exports = router;