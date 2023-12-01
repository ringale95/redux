//below is not a pure function
function myfunc(number){
    return number * Math.random();  //this random method generatesa  new value everytime
}

//below is pure function
function myfunc(number){
    return number * w2; //this is pure because everytime we call it gives as 2 if number =1
}

//In pure functions we cant use below:
// no random values
//no date and time
//we cant read or change - no global state(dom element, files, db etc)
//no mutation of parameters

//In redux only reducers have to be pure other functions can be pure or impure

//below function is impure because minAge can change anytime so result will always be different
function isEligible(age){
    return age > minAge;
}

//to make above function as pure we will pass in parameter
function isEligible(age, minAge){
    return age > minAge;
    
}

//benefits:
//self-documenting -> as everthing a func needs is visible in parameters
//easily testable
//concurrent
//cacheable -> suppose any pure func return same output we can store in cache 