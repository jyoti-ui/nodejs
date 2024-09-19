async function greet(name){
    const{ upperCase } = await import("upper-case");
    console.log(upperCase(`Hello ${name}, welcome to Codevolution`));
}

module.exports = greet;