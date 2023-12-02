import * as actions from './actionTypes';

let lastId = 0;

//reducer: pure functions
export default function reducer (state = [], action){

    switch(action.type){
        case actions.BUG_ADDED:
            return [
                ...state,
                {   
                    id: ++lastId,
                    description: action.payload.description,
                    resolved:false
                }];
        case actions.BUG_REMOVE:
        //we want to return all bugs except the removed bug
            return state.filter(bug => bug.id !== action.payload.id)    
        case actions.BUG_RESOLVED:
            //if bug is resolved then we change the resolve to true
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved:true})        
        default:
            return state; //here state is empty array 
    }
       
}