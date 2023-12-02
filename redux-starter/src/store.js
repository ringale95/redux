import { createStore } from "redux";
import reducer from './reducer'; //if we havent export using default then we have to do {reducer}

const store = createStore(reducer);

export default store;