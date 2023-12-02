import store from './customStore';
import * as actions from './actions';
// store.state = 1;
// console.log(store.state); //we should not modify the state of store like this as store is immutable
 
// store.state =1; //now it means that we are adding one more property to store object
// console.log(store.getState()); //here the output will be still undefined because now it means we are adding one more property that is state which is different from state variable inside function

//store now have two properties -> state:1, getState: function

store.subscribe(()=>{
    console.log("Store changed!");
})
store.dispatch(actions.bugAdded("Bug 1"));
console.log(store.getState());