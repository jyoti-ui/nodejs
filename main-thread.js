const http = require("node:http");
const { Worker } = require("node:worker_threads");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end("Home Page");
    } else if(req.url === "/slow-page"){
        const worker = new Worker("./worker-thread.js");
        worker.on("message", (j) => {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(`Slow Page ${j}`);
        })
    }
})

server.listen(8000, () => console.log("Server is running on port 8000"));

//worker thread
//a new thread or process is created
//it is run on same node instance
//but this new process runs on different core
//basically some task which is cpu intensive
//is run on different process in same node instnace
//this process/thread runs on different core/cpu
