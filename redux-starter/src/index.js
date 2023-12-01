import { pipe } from "lodash/fp";

const { wrap } = require("lodash");

let input = "  Javascript  ";

//trim
//wrap in div
//convert to lowerCase

const trim = str => str.trim();
// const wrapInDiv = `<div>${str}</div>`;
// const wrapInSpan = `<span>${str}</span>`;

//Now above wrapInDiv and wrapInSpan are two different function with similar behavior so
//we will instead define a common funciton

const wrap = type => str => `<${type}>${str}</${type}>`;
const lowerCase = str => str.toLowerCase();


//but again a problem that we need to still read it from right-left. To solve the problem we will use pipe

//in pipe we will write in order we want to accomplish that

const transform = pipe(trim, lowerCase, wrap("div")); //here div is passed as a function and not a string


console.log(transform(input));
