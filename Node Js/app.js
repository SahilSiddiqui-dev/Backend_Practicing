const fs =  require("fs");

console.log("start reading a file ");

fs.readFile("./Node-Js/text.txt", "utf-8", (err, data) => {
    if(err){
        console.error("There is an error in the file", err);
        return;
    }

        console.log("File Content : ", data);
} )

//fs.writeFile("text.txt", "Start Grinding");

fs.readFile("./Node-Js/text.txt", "utf-8", (err, data) => {
    if(err) {
        console.error("cant read file !!", err);
        return;
    }
    console.log("file content : ", data);
})

console.log("File execution is over");


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


