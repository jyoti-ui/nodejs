const http = require("node:http");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end("Home Page");
    } else if(req.url === "/slow-page"){
        for(let i = 0; i < 6000000000;i++){}
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Slow Page");
    }
})

server.listen(8000, () => console.log("Server is running on port 8000"));

//pm2 package is installed globally
//to use as command line tool
//pm2 finds efficient number of clusters to be created
//for a particular file program to run on port
//or for a particular application to run on port

//command - 
//For example, to create cluster to run no-cluster.js
//no-cluster.js file program has server created
//which is running on port 8000
//program displayed on server
//load is being taken by cluster workers

//pm2 start no-cluster.js -i 0
//pm2 stop no-cluster.js



