// strings cannot be mutated
let n = "Raveena";
let newName = n.toUpperCase(); //here this creates a copy of n and then update doesnt update on same

//but in objects we can update to same object
// let book = {};
// book.title = "..."

//but when we use const - we are not creating an immutable object
const book = {};
book.title = ".."; 
//cant reassign book again


//Benefits of immutability:
//1. Predictable - > if u call a func and pass an object and we know that object is not gonna change 
//2. Faster to detect changes. React needs to know if thers changes happening so as to re-render
//3. concurrency

//cons
//1. performance -> all the values copied to new object
//2. cause memory overhead -> efers to the additional memory resources consumed by a program or system beyond what is strictly required for its essential functionality

//Structural sharing: 

const person =  { name : "John", 
                address : {
                    country: "USA",
                    city: "San Francisco"
                }
                };
person.name = "Raveena";
console.log("Here "+person);
//to update the object we cant do : person.name and update
//instead take a copy and update 2 ways : Object.assign({}, person. { name : "Bob", age: 30})//copies person object to empty obj
const updated =  Object.assign( {}, person, {name: "Bob", age: "30"});
console.log(updated);

//2nd way is : or update using spread operator
const update = {...person, name: "Bob"} //here name is updated . more concise
//this is shallow copy -> Shallow copy will create new object or array but will reference the original nested object or array
//Deep copy -> This will create new object or array alongwith new copies of nested objects or arrays. Changes made to nested
//object will not affect the original copy nested objects

//deep copy
const deepUpdate = {
    ...person, address:{
        ...person.address, 
        city: "New York"
    }, name: "Bob"
};
console.log(person);

//In above deep copy the address of original person object is not modified 