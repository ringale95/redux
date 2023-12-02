//SNA
const logger = store => next => action => {

    //log every action dispatched
    //action: action dispatched
    //next: next middleware  -> reducer if no middleware
    
    //Currying -> N => 1
    //replace comma with =>

    console.log("store", store);
    console.log("next", next);
    console.log("action", action);
    next(action); // to call the next action
  
};

export default logger;