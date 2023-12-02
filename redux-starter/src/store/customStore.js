import reducer from './reducer';
function createStore(reducer){
    let state; //stores internal state of store
    let listeners = [];

    function subscribe(listener){
        listeners.push(listener); //as multiple people can subscribe
    }

    function dispatch(action){
        //Call reducer to get new state
        state = reducer(state, action);

        //afte4r dispatch we will notify user
        for(let i =0; i<listeners.length; i++)
        listeners[i]();
    }


    function getState(){ //we can define another function inside of function as function is first class citizen
        return state; 
    }


    return {
      subscribe,
      dispatch,
      getState   //suppose if we declare state here then we will be able to modify that which we dont want

    };
}

export default createStore(reducer);