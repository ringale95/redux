import { compose,pipe } from "lodash/fp";

const { wrap } = require("lodash");

let input = "  Javascript  ";

//trim
//wrap in div
//convert to lowerCase

const trim = str => str.trim();
const wrapInDiv = `<div>${str}</div>`
const lowerCase = str.toLowerCase();

//const result = wrapInDiv(lowerCase(trim(input)));
//Instead of doing above nested calls we will directly call compost function from lodash

//const transform = compose(wrapInDiv, lowerCase, trim);
//compose is higher order function which takes different function and return the composition for all function
//so we need not to do wrapInDiv and all () things

transform(input);
//but again a problem that we need to still read it from right-left. To solve the problem we will use pipe

//in pipe we will write in order we want to accomplish that

const transform = pipe(trim, lowerCase, wrapInDiv);
