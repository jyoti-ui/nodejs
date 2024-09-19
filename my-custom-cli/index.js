#!/usr/bin/env node
// console.log("codevolution-poke");

// console.log(process.argv)

// const yargs = require("yargs");
// const {argv} = yargs(process.argv);
const inquirer = require("inquirer");

const printFiveMoves = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
    if(response.status === 404){
        console.log("Oops! No pokemon found");
        console.log("Please enter valid poke name");
        return;
    }
    const pokemon = await response.json();
    const moves = pokemon.moves.map(({move}) => move.name);
    console.log(moves.slice(0,5));
}

const prompt = inquirer.createPromptModule();
prompt([{
    type : "input",
    name : "pokemon",
    message : "Enter a pokemon name to view its first 5 moves"
}]).then((answers) => {
    const pokemon = answers.pokemon;
    printFiveMoves(pokemon);
})

// printFiveMoves(argv.pokemon);
