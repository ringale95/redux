import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './bugs'; //if we havent export using default then we have to do {reducer}

export default function configureStore(){
const store = createStore(reducer,devToolsEnhancer({ trace : true }));
return store;
}