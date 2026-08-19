fs = require("fs/promises");

const path = require("path");
const filePath = path.join(__dirname, "test.txt");

async function writeFile() {
    try {
        await fs.writeFile(filePath, "this is file of promise", "utf-8");
        console.log("File written successfully");
    } catch (err) {
        console.error("Error writing file", err);
    }
}

async function readFile(){ 
    try {
        const data = await fs.readFile(filePath, "utf-8");
        console.log("File content : ", data);
    }
    catch (err) {
        console.error("Error reading file", err);
    }
}
//writeFile();
readFile();