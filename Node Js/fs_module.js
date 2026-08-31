const fs =  require("fs");

console.log("start reading a file ");

fs.readFile("./text.txt", "utf-8", (err, data) => {
    if(err){
        console.error("There is an error in the file", err);
    }
    else {
        console.log("File content : ", data);
    }

} )
fs.writeFile("./text.txt", "This is a new file created using writeFile method", (err) => {
    if(err){
        console.error("there is an error in the file", err);
    }
    else {
        console.log("File created successfully");
    }
})
// fs.appendFile("./text.txt", "This is a new line added to the file", (err) => {
//     if(err){
//         console.error("There is an error in the file", err);
//         return;
//     }
//     console.log("File appended successfully");
// });

fs.readFile("./text.txt", "utf-8", (err, data) => {
    if(err) {
        console.error("cant read file !!", err);
        return;
    }
    console.log("file content : ", data);
})

console.log("File execution is over");

// fs.rename("test.txt", "demo.txt", function(err) {
//     if(err){
//         console.error(err);
//     }
//     else {
//         console.log("done");
//     }
// })
// Using Async-await

// async function reading() {
//     try {
//         const data = await fs.readFile("text.txt", "utf8");
//         console.log("FileData : ", data);
//     }
//     catch(err) {
//         console.error("File cant be read !!", err);
//     }
// }
// reading();


