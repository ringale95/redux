import { combineReducers } from 'redux';
import bugsReducer from './bugs';

// root-reducer
export default combineReducers({
    bugs: bugsReducer
})