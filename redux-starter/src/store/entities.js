import { combineReducers } from "redux";
import reducer from './bugs';

export default combineReducers({
    bugs: reducer
})
