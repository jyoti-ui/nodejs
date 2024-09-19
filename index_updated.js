//default export
// const add = require("./add")

// const sum = add(1,2);
// console.log(sum)

// const sum1 = add(2,3);
// console.log(sum1)

//--- module scope
// require("./batman");
// require("./superman");

//module scope is achieved by using iife
//before a module's code is executed, nodejs will wrap it with a function wrapper
//which will provide module scope

//importing same object from super-hero.js
const SuperHero = require("./super-hero");
// const superhero = require("./super-hero");
// console.log(superhero.getName());
// superhero.setName("Bruce Wayne");
// console.log(superhero.getName());

// const newSuperHero = require("./super-hero");
// console.log(newSuperHero.getName());

//importing same class and creating different instance
// const batman = new SuperHero("Batman");
// console.log(batman.getName());
// batman.setName("Bruce Wayne");
// console.log(batman.getName());

// const superman = new SuperHero("Superman");
// console.log(superman.getName());
// superman.setName("Clark Kent");
// console.log(superman.getName());

//Note - Superhero class is loaded once and cached
//from then it creates copy of this cached class
//and whenever class methods is called
//in our case, getname or setName
//these methods are just reexecuted
//that's how module caching works in nodejs
//and that's why execution of module/code is faster in nodejs

//es modules
//nodejs has their own module system
//es modules
//we use exports keyword here
//default export and name export
//default and named import

//watch mode - node 18 introduced watch mode
//node --watch index


//in built modules
//many, but mostly in use
//path, events, fs, stream, http










//I will think about it, think and start doing it -
//I want to create complex games
//games me mujhe bahut interest h
//most complex, engaging and fun games
//if it can productivity to people, that's an added bonus
//or we can say if it's a productivity booster, it can be an added bonus
//not addiction, but a productivity booster
//and I am doing all for myself and because I have my high interest in it... 

//path module
// console.log(__dirname);
// console.log(__filename);

const path = require("node:path"); 
//we can also use path instead of node:path
//but writing node:path makes it clear - that's it's an in-built module

// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))

// console.log(path.extname(__dirname))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__filename)))

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./add.js"))

// console.log(path.resolve("folder1", "folder2", "index.html"))

// console.log(path.join("/folder1", "folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "../index.html"))
// console.log(path.join(__dirname, "add.js"));

// console.log(path.resolve("folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "../index.html"))
// console.log(path.resolve(__dirname, "add.js"));

//callbacks
//wait for until a particular time or event has occured
//synchronous and asynchronous callback
//-- need to write more here

//events module

// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Order received! baking ${size} Pizza with ${topping}`)
// })

// emitter.on("order-pizza", (size) => {
//     if(size === "large"){
//         console.log("Serving one complimentary drink")
//     }
// })

// emitter.emit("order-pizza","large", "small");
// console.log("Do work before event occurs in the system")

//By default events object from EventEmitter class are synchronous
// in nature
//to make it asynchronous, we may use setImmediate, process.nextTick or promises

//Creating a pizza-order system without event-driven approach
// const PizzaShop = require("./pizza-shop");
// const pizzaShop = new PizzaShop();

// pizzaShop.order();
// pizzaShop.displayOrderNumber();

//Creating custom events using EventEmitter class
// const PizzaShop = require("./pizza-shop");
// const DrinkMachine = require("./drink-machine")
// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();

// pizzaShop.on("order",(size, topping) => {
//     console.log(`Order received! baking ${size} Pizza with ${topping}`);
//     drinkMachine.serveDrink(size);
// })
// pizzaShop.order("large","mushroom");
// pizzaShop.displayOrderNumber();

// pizzaShop.order("extra large","olives");
// pizzaShop.displayOrderNumber();

//Note
//By extending EventEmitter class,
//- we can combine different modules
//without tightly coupling it

//- also, we can create custom events
// which objects from derived class can emit and respond to

//Binary set - representation in binary form (0s and 1s) 
//character sets 
//- what number should be set for a particular character 
//- 2 systems - Unicode and ASCII
//character encoding
//- how to represent different type of character sets character
// in binary form
//- it represents how many bits to represent a number
//diff character encoding system - UTF-8
// - it represents characters should be encoded in bytes(8 bits)
// 4 => 100 => 00000100
// V => 86 => 01010110

//Streams and buffers
//need to write for this one

//Asynchronous JS
//need to write for this one

//I will see why JS was created
//and how JS was created

//fs module

// const fs = require("node:fs");

// console.log("First")

// const contents = fs. readFileSync("file.txt","utf-8");
// console.log(contents)

// console.log("Second")

// fs.readFile("file.txt","utf-8", (error, data) => {
//     if(error){
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })


// console.log("Third")

// fs.writeFileSync("greet.txt","Hello world!")

// fs.writeFile("greet.txt"," Hello Vishwas!", {flag : "a"},(err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("File written successfully")
//     }
// })

//fs promise module
// const fs = require("node:fs/promises");

//using promises

// console.log("First");

// fs.readFile("file.txt", "utf-8")
// .then((data) => console.log(data))
// .catch((error) => console.log(error))

// console.log("Second");

//using async await

// async function readFile() {
//     try {
//         const data = await fs.readFile("./file.txt","utf-8")
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }

// readFile()

//Streams

// const fs =  require("node:fs")

// const readableStream = fs.createReadStream("./file.txt",{
//     encoding : "utf-8",
//     highWaterMark : 2
// })

// const writeableStream = fs.createWriteStream("./file2.txt")

// readableStream.on("data", (chunk) => {
//     // console.log(chunk);
//     writeableStream.write(chunk)
// })


//fs module is one of the many modules which uses streams
//Other modules which uses streams
// - http
//   - http request is readable stream
//   - http response is writeable stream

//Types of streams - 

//Readable streams 
// - from which data can be read

//Writeable streams
// - from which we can write data

//Duplex streams
// - that are both readable and writeable

//Transform streams
// - statement is
//   - that can modify or transform data as it is written and read
// - it can read from a file as readable stream
// - it can write to the file as writeable stream
// - Sockets as duplex stream
// - File compression 
//   - where you can write compressed data
//   - and read de-compressed data 
//   - to and from a file

// Pipes
// One of its application in transform stream
//- transform stream 
//  - is a duplex stream
//  - used to read data from a stream
//  - transform the data
//  - and write data to another stream
//  - pipe is used to chain 
//  - readable stream to transform stream
//  - and transform stream to writeable stream

// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip();

// const readableStream = fs.createReadStream("./file.txt", {
//     encoding : "utf-8",
//     highWaterMark : 2
// })

// readableStream.pipe(gzip).pipe(fs.createWriteStream("./file2.txt.gz"));

//http module - 
//creating a server using http module

// const http = require("node:http");

// const superhero = {
//     firstName : "Bruce",
//     lastname : "Wayne"
// }
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {"Content-Type" : "application/json"});
//   res.end(JSON.stringify(superhero));
// })

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })

//sending html response

// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
// res.writeHead(200, {"Content-Type" : "text/html"});
// const html = fs.readFileSync("./index.html","utf-8");
// res.end(html);

//For efficient management of file reading
//we use streams

// fs.createReadStream("./index.html").pipe(res);
// fs.createReadStream(__dirname+"/index.html").pipe(res);
// })

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })

//html template

// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {"Content-Type" : "text/html"});
//   const name = "Jyoti";
//   let html = fs.readFileSync("./index.html","utf-8");
//   html = html.replace("{{name}}", name)
//   res.end(html);
// })

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })

//http routing
// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   //req.method - also tells us which kind of http request it is
//   //GET, POST, PUT, PATCH, DELETE
// if(req.url === "/") {
//   res.writeHead(200, {"Content-Type" : "text/plain"});
//   res.end("Home Page");
// } else if(req.url === "/about"){
//   res.writeHead(200, {"Content-Type" : "text/plain"});
//   res.end("About Page");
// } else if(req.url === "/api"){
//   res.writeHead(200, {"Content-Type" : "application/json"});
//   res.end(JSON.stringify({
//     firstName : "Bruce",
//     lastname : "Wayne"
//   }))
// } else {
//   res.writeHead(404)
//   res.end("Page not found");
// }})

// server.listen(3000, () => {
//   console.log("Server is running on port 3000")
// })

//Web framework
//express

//Nodejs runtime

//it includes external dependencies
// - like V8, libuv, zlib, crypto, etc

//it includes C/C++ features
// - file system access, networking

//JS library
// - so we can access the features of C/C++
// - via JS code
// - JS code uses V8 engine under the hood

//Js originally is
// - a synchronous, blocking and single threaded language
// - for asnchronous behaviour
// - we use event loop

//libuv
// - is a cross platform open source C library
// - is used to provide asynchronous behaviour in nodejs
// how libuv does?
// - by using
//   - thread pool
//   - eveny loop

//thread pool
// - pool of thread
// - any time consuming method in main thread is assigned to thread
// - in thread pool
// - executes code synchronously in thread
// - but off main thread
// - so it appears as if the method is running asynchronously

const crypto = require("node:crypto");

// const start = new Date();

// crypto.pbkdf2Sync("a", "b", 100000, 512, "sha512");
// crypto.pbkdf2Sync("a", "b", 100000, 512, "sha512");
// crypto.pbkdf2Sync("a", "b", 100000, 512, "sha512");
// console.log("Hash", new Date() - start);

//async crypto

// process.env.UV_THREADPOOL_SIZE = 8;
// const MAX_CALLS = 8;

// const start = Date.now();

// for(let i = 0; i < MAX_CALLS; i++) {
// crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//   console.log(`Hash ${i+1}`, new Date() - start);
// })
// };

//timing of thread
// - it takes different time in different machines
// - due to different cpus capacity

//Default number of threads in thread pool
// - is 4
// - after which async event (or we can say async method), wait for a thread to be free
// - so it can run async event or method
// - if we want for parallel threads to run
// - we can increase size of thread pool
// - by setting process.env.UV_THREADPOOL_SIZE = the size we want;

//if we keep thread pool size 
// - more than the size of core
// - it will take more time
// - for example
// - if our core size is 8, threadpool size is 16
//   - threads will take double time
//   - to execute a single thread

// process.env.UV_THREADPOOL_SIZE = 16;
// const MAX_CALLS = 16;

// const start = Date.now();

// for(let i = 0; i < MAX_CALLS; i++) {
// crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//   console.log(`Hash ${i+1}`, new Date() - start);
// })
// };

//increasing thread pool size can help with performance
//but that is limited by number of available cpu cores

//not all async methods is handled by thread pool

// const https = require("node:https");

// const MAX_CALLS = 16;

// const start = Date.now();

// for(let i = 0; i < MAX_CALLS;i++){
//   https
//   .request("https://www.google.com", (res) => {
//     res.on("data", () => {});
//     res.on("end",() => {
//       console.log(`Request ${i+1}`, Date.now() - start)
//     })
//   })
//   .end();
// }

//above shows even when we have MAX_CALLS = 16
// - it takes approximates equal time for all the requests
// - which means it is not using thread pool
// - it is network operation
// - and it is using operating system kernels

// - Kernel is a piece of software written in C and assembly language
// - But under the hood libuv polls the kernel
//(Polling kernel means checking with the kernel whether an event has been completed)
//and notify nodejs modules about it as a part of event driven approach, 
//but nodejs doesnot poll kernel
// - libuv use most efficient polling mechanisms
// - to poll in different operating system

// - Infinite believe in yourself

//event loop
//6 different queues
// - *timers, I/O, check, close, 
// - **microtask queue(process.nextTick, promise1)
// * - these queues are part of libuv
// ** - these queues are not part of libuv, but part of nodejs runtime

//Priority of queues
// - ***microtask queue(nextTick queue, promise queue), timer, microtask, I/O, microtask, check, microtask
// - close, microtask
// - *** - above is 1 loop of event loop
// - if there is no code to execute, event lopp exits
// - else loop will run as many times as there is code to execute

//Microtask queue
// - with code

//point one

// console.log("this is console.log 1");
// process.nextTick(() =>{
//   console.log("this is process.nextTick 1");
// })
// console.log("this is console.log 2");

//point two
// console.log("this is console.log 1");
// Promise.resolve().then(() => {
//   console.log("this is promise 1")
// })
// console.log("this is console.log 2");

//point three
// console.log("this is console.log 1");
// process.nextTick(() => {
//   console.log("this is process.nextTick 1")
// })
// Promise.resolve().then(() => {
//   console.log("this is promise 1")
// })
// console.log("this is console.log 2")

// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("this is the inner next tick inside next tick")
//   })
// })

// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() => {
//     console.log("this is the inner next tick inside Promise the block");
//   })
// })
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

//Output

// this is process.nextTick 1
// this is process.nextTick 2
// this is process.nextTick 3
// this is the inner next tick inside next tick
// this is promise.resolve 1
// this is Promise.resolve 2
// this is Promise.resolve 3
// this is the inner next tick inside Promise the block

// - first all process.nextTick CBs are executed
// - then all Promise CBS are executed
// - then again process.nextTick CBs are executed
// - then control moves to Promise queue
// - all CBS in Promise queue are executed
// - it keeps moving till both queues are empty

// When to use process.nextTick
// - Based on the codebase context, here are some key scenarios when to use process.nextTick in Node.js:

// To ensure callback functions run after the rest of the user's code but before the event loop continues.

// For error handling and cleanup of resources before the program exits.

// To resolve recursive function calls that would otherwise exceed the maximum call stack size.

// To break up computationally intensive tasks into smaller chunks, allowing other I/O operations to be processed in between.

// When you need to execute some code asynchronously, but as soon as possible, before any I/O events or timers.

// To keep the API consistent by ensuring asynchronous execution of callbacks even when the operation could be performed synchronously.

// In module initialization, to defer some setup actions until after the current module's code has finished loading.

// To maintain a consistent execution order in certain scenarios where you want to ensure a specific callback runs before other I/O or timer events.

// process.nextTick is particularly useful when you need to schedule something to occur as soon as possible in the next iteration of the event loop, but after the current operation completes. 
// It's a powerful tool for managing the execution order of asynchronous operations in Node.js.

//Timer Queue

//Example

//executed in sequence it is queued
// setTimeout(() => console.log("this is setTimeout 5"), 0);
// setTimeout(() => console.log("this is setTimeout 4"), 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);

// //then followed by below
// setTimeout(() => console.log("this is setTimeout 5-1"), 1);
// setTimeout(() => console.log("this is setTimeout 4-1"), 1);
// setTimeout(() => console.log("this is setTimeout 3-1"), 1);

// //then one more below with zero 
// //then below is executed
// setTimeout(() => console.log("this is setTimeout 5"), 5);
// setTimeout(() => console.log("this is setTimeout 4"), 4);
// setTimeout(() => console.log("this is setTimeout 3"), 3);

// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => {
//   console.log("this is setTimeout 2");
//   process.nextTick(() => 
//   console.log("this is next tick inside setTimeout"));
//   Promise.resolve().then(() => console.log("this is promise then block inside setTimeout"))
// }, 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);
// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("this is the inner next tick inside next tick")
//   })
// })

// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() => {
//     console.log("this is the inner next tick inside Promise the block");
//   })
// })
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

//Note - 
// - timer starts as soon as it's callback is queued in timer queue
// - once event loop reaches timer queue, it executes callbacks in timer queue based
// - on timer expiry

//callbacks in microtask queue is executed in between
//the execution of callbacks in timer queue
// - it means after every execution of callback in timer queue,
// - event loop checks microtask queue
// - if there is any callbacks in micro task queue, it executes them

// setTimeout(() => console.log("this is setTimeout 1"), 1000);
// setTimeout(() => console.log("this is setTimeout 2"),500);
// setTimeout(() => console.log("this is setTimeout 3"), 0); **//

//- we can also say CBs in timer queue are excuted in FIFO order

//First, the callbacks are indeed queued in the order they are encountered in the code (1, 2, 3).

// Then, they are requeued based on their expiration times (3, 2, 1).

// Finally, they are executed in this requeued order.

//Note - 

// - The setTimeout callbacks are executed in FIFO order based on when their timers expire, 
// not the order in which they were encountered in the code.

// - timer queue is not queue
// - but a min heap data structure
// - this data structure is used beyond nodejs

//I/O queue

//Most of the async methods from the built in modules queue
//the CB function in I/O queue

//fs.readFile();

//case 1:
// const fs = require("fs");

// fs.readFile(__filename, () =>{
//     console.log("this is readFile 1");
// })

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

//Output
// this is process.nextTick 1
// this is Promise.resolve 1
// this is readFile 1

//Inference -
//CBs in microtask queue is executed before CBs in I/O queue

//case 2:

// const fs = require("fs");

// setTimeout(() => console.log("this is setTimeout 1"), 0);

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
// })

//Inference -
//When running setTimeout with 0ms and I/O async method,
//the order of execution cannot be guranteed
//Why?
//Chromium DOM timer cpp file
// - it adds 1ms automatically to setTimeout method set to 0ms
// - for this reason
// - if event loop enters timer queue at 0.05 ms, CB won't be executed
// - but if CPu is busy and
// - event loop enters timer queue at 1ms or more than 1 ms, CB will be executed

//case 3:

// const fs = require("fs");

// //I/O queue
// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
// })

// //Microtask queue
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

// //Timer queue
// setTimeout(() => console.log("This is setTimeout 1"), 0);

// //To keep CPU busy
// for(let i = 0; i < 2000000000;i++){}

//I/O polling - 
// const fs = require("fs");

// //I/O queue
// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
// })

// //Microtask queue
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

// //Timer queue
// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setImmediate(() => console.log("This is setImmediate 1"));

// //To keep CPU busy
// for(let i = 0; i < 2000000000;i++){}

//output

// this is process.nextTick 1
// this is Promise.resolve 1
// This is setTimeout 1
// This is setImmediate 1
// this is readFile 1

//Why setImmediate CB executes before I/O CB

//I/O polling - 
// I/O events are polled
// which means event loop checks with readFile method of fs module
// that is I/O operation is completed
//If yes, it queues CB in I/O queue
//then proceeds to check queue
//if check queue has any CB, it executes it
//then in next iteration of event loop, it executes CBs in I/O queue
//if there are any other CBs in this iteration
//it will execute it.

//Check queue - 
 
//case 1 :

// const fs = require("fs");

// //I/O queue
// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
//     //setImmediate is called after readFile operation is completed
//     setImmediate(() => console.log("this is inner setImmediate inside readFile"))
// })

// //Microtask queue
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));



// //Timer queue
// setTimeout(() => console.log("This is setTimeout 1"), 0);

// //To keep CPU busy
// for(let i = 0; i < 2000000000;i++){}

//Inference -
//Check queue CBs are executed after microtask queue CB, timer queue CB and I/O queue CB

//case 2:

// const fs = require("fs");

// //I/O queue
// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
//     setImmediate(() => console.log("this is inner setImmediate inside readFile"));
//     process.nextTick(() => console.log("this is inner process.nextTick inside readFile"));
//     Promise.resolve().then(() => console.log("this is inner Promise.resolve inside readFile"));
// })

// //Microtask queue
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

// //Timer queue
// setTimeout(() => console.log("This is setTimeout 1"), 0);

// //To keep CPU busy
// for(let i = 0; i < 2000000000;i++){}

//Inference - 
//Microtask queue CBs are executed after I/O queue CBs
//and before cgeck queue CBs

//case 3:

// setImmediate(() => console.log("This is setImmediate 1"));
// setImmediate(() =>  {
//     console.log("This is setImmediate 2");
//     process.nextTick(() => console.log("this is process.nextTick 1"));
//     Promise.resolve().then(() => console.log("This is promise.resolve 1"))
// })
// setImmediate(() => console.log("This is setImmediate 3"));

// Inference -
//microtask queue CBs are executed in between check queue CB
// - which means if check queue CB has microtask CBs
// - then it queues microtask queue with CBs
// - and it checks microtask queues for CB
// - if CB exists, then it executes it

// - 
// setTimeout(() => console.log("This is setImmediate 1"));
// setTimeout(() =>  {
//     console.log("This is setImmediate 2");
//     process.nextTick(() => console.log("this is process.nextTick 1"));
//     Promise.resolve().then(() => console.log("This is promise.resolve 1"))
// })
// setTimeout(() => console.log("This is setImmediate 3"));

//It doesn't apply same with setTimeout
// - in setTimeout, microtask queue is checked after every timer queue CB
// - if microtask queue has any CB, it executes it

//case 4:

// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setImmediate(() => console.log("This is setImmediate 1"));

// Output - 
// This is setImmediate 1
// This is setTimeout 1

//and sometimes output is -
// This is setTimeout 1
// This is setImmediate 1

//Inference - 
// - when running setTimeout with delay 0 ms
// - and setImmediate method, the order of execution can never be guaranteed

//To guarantee order of execution of setTimeout and setImmediate, we can add delay

// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setImmediate(() => console.log("This is setImmediate 1"));

// for(let i = 0; i < 2000000000;i++){}

//Close queue

// const fs = require("fs");

// const readStream = fs.createReadStream(__filename);
// readStream.close();

// readStream.on("close", () => {
//     console.log("thsi is from readable stream close event callback")
// })

// setImmediate(() => console.log("This is setImmediate 1"));
// setTimeout(() => console.log("This is setTimeout 1"), 0);
// process.nextTick(() => console.log("This is process.nextTick 1"));
// Promise.resolve().then(() => console.log("This is promise.resolve 1"));

//Inference -
//Close queue CBs are executed after all other queues CBs
//in a given iteration of the loop

//package.json
//you can create your own package.json file
//{
//     "name" : "greet-codevolution",
//     "version" : "1.0.0",
//     "description" : "Codevolution greeting package",
//     "keywords" : ["codevolution", "greet"],
//     "main" : "index.js"
// }

//or you can use npm init or npm init --yes or npm init --y 
//to create package.json file automatically

//package.json is a configuration file for npm

//node package manager manages package.json 
//and package.lock.json files 
//and creates node_modules folder 
//when we run npm install command.

//difference between package.json and package-lock.json
//package.json
//{
// "dependencies": {
//     "lodash": "^4.17.21"
//   }
// }

//package-lock.json
// {
//     "dependencies": {
//       "lodash": {
//         "version": "4.17.21",
//         "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
//         "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
//       }
//     }
//   }

//difference is
//package.json contains
//The ^ symbol indicates that npm can install the latest minor or patch version
//but not a major version update.

//package.lock.json
//same dependency wpuld be locked to a specific version
//or we can say more precise version

//npm i upper-case - install latest stable version
//you can install specific version as well
// - npm i upper-case@2.0.0
//but if you again run npm i upper-case
//it will install latest stable version

//Global packages
//- these are installed globally
//- and not used inside project code
//- but is used from any command line tools
//- ex - nodemon
//- also if you install global package locally
//- you have to run through npm script

//for ex - if you install nodemon globally
//you can run it through
//command nodemon index from any terminal

//else if you install it locally
//you can run through npm scripts
//add in npm script
//"scripts" : {
// "start" : "nodemon index.js"
// }
//Run npm start

//*Note
//- npm recognizes buil in commands
// - like start, test
//you can run these commands
//by running npm start, npm test or npm run start, npm run test
//But to run custom scripts
//you can run npm run <script-name>
//For example
// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "dev": "nodemon index.js"
// }
//Run npm run dev to run
//custom script dev

//nodemon k zarurt ni h
//node --watch index se kaam ho ja rha h
//but for understnading global and local packages
//humne nodemon install kiya h
//toh we will keep it as a reference

//Cluster module
// - is a built in module
// - it is used to create child processes





  
    



























































