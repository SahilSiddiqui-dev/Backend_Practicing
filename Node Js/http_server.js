const http = require("http");

const obj = {
    name: 'sahil',
    age: 22,
    skill: 'backend'
};

const server  = http.createServer((req, res) => {
    console.log("Request URL : ", req.url);
    if(req.url === "/"){
        res.writeHead(200, {"content-type" : "text/plain"});
        res.end("hello from home page");
    }
    else if(req.url === "/about") {
        res.writeHead(200, {"content-type" : "application/json"});
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404, {"content-type" : "text/plain"});
        res.end("requested page is not found on the server");
    }
});

server.listen(3000, ()=> {
    console.log("Server running at http://localhost:3000/");
})