const path = require("path");
const samplePath = "D:\\Full-stack Practice\\Node Js\\test.txt";

console.log("Base name : ", path.basename(samplePath));
console.log("Directory name : ", path.dirname(samplePath));
console.log("Extension name : ", path.extname(samplePath));
console.log("Parse : ", path.parse(samplePath));
console.log("Join : ", path.join(__dirname, "test.txt"));