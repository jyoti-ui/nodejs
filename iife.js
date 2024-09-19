(function(message){
    const superhero = "batman";
    console.log(message, superhero);
})("Hey");

//without semi-colon, 
//code executes as below
//(undefined)((function(){ ... })())

(function(message){
    const superhero = "Superman";
    console.log(message, superhero);
})("Hi");