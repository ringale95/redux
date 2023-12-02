const func = ({ dispatch, getState }) => next => action => {

    //Instead of using these we have written above:
    //The func function is curried, meaning it returns a sequence of functions.
    // const middleware = func({ dispatch, getState });
    // const secondFunction = middleware(next);
    // const finalFunction = secondFunction(action);

    if(typeof action === 'function') 
        action(dispatch, getState);
    else
        next(action);
}

export default func;