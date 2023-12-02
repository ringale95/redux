import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, getUnresolvedBugs} from './store/bugs'; 

const store = configureStore();



store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));

console.log(getUnresolvedBugs(store.getState()));
