// var generateName = require("sillyname");
import generateName from "sillyName";
import {randomSuperhero} from 'superheroes';

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// const superheroes = require("superheroes");

const name = randomSuperhero();

console.log(`I am ${name}!`);
