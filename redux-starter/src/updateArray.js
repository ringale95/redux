const numbers = [1,2,3];

//Adding
const addedEnd = [...numbers, 4]; //to add in the end
const addBeginning = [4, ...numbers];

//to put before specific position
const index = numbers.indexOf(2);
const added  = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
]; //this will return array from 0 to 2 and excluding 2 and as this returns new array so we will spread
console.log(added);

//removing
const removed = numbers.filter(n => n!== 2 );
console.log(removed);

//updating exisitng
const update = numbers.map(n => n === 2 ? 20 : n) //here if there is array of objects so instead of 20 we will put full copy of array
console.log(update);

//updating array of objectds:
const array_objects = [
    {id:1,value:10},
    {id:2, value:20},
    {id:3, value:30}
]
const updateArrayObj = array_objects.map(obj => obj.id === 2 ? {...array_objects, value : 200} : obj);
console.log(updatedArrayObj);