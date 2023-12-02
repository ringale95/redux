import store from './store'; //as exported as default so we are not using {store}
import { bugAdded, bugRemoved, bugResolved } from './actions';

console.log(store);
//to get state

//subscribe:
const unsubscribe = store.subscribe(()=>{
console.log('Store changed!', store.getState())
})
store.dispatch(bugAdded("Bug 1"));

unsubscribe();

store.dispatch(bugResolved(1));

store.dispatch(bugRemoved(1));
console.log(store.getState());