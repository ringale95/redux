//action types
const BUG_ADDED = "bugAdded";
const BUG_REMOVE = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

//Action creator:

export function bugAdded(description){
    return {
        type: BUG_ADDED,
        payload:{
        description
        }
    };
}

export function bugRemoved(id){
return {
    type: BUG_REMOVE,
    payload: {
        id:1
    }
};
}

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload:{
        id
    }
})

//reducer

let lastId = 0;

//reducer: pure functions
export default function reducer (state = [], action){

    switch(action.type){
        case BUG_ADDED:
            return [
                ...state,
                {   
                    id: ++lastId,
                    description: action.payload.description,
                    resolved:false
                }];
        case BUG_REMOVE:
        //we want to return all bugs except the removed bug
            return state.filter(bug => bug.id !== action.payload.id)    
        case BUG_RESOLVED:
            //if bug is resolved then we change the resolve to true
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved:true})        
        default:
            return state; //here state is empty array 
    }
       
}



