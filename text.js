//default export
// const add = require("./add")

// const sum = add(1,2);
// console.log(sum)

// const sum1 = add(2,3);
// console.log(sum1)

//--- module scope
require("./batman");
require("./superman");

//module scope is achieved by using iife
//before a module's code is executed, nodejs will wrap it with a function wrapper
//which will provide module scope





