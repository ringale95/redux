import {createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
let lastId = 0;

const slice = createSlice({
    name: 'bugs', //name of slice
    initialState: [],
    reducers:{
        //actions to action handler
        bugAdded:(bugs, action) =>{
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
              });
        },

        bugResolved : (bugs, action) =>{
            const index = bugs.findIndex((bug) => bug.id === action.payload.id);
            bugs[index].resolved = true;
        }
    }
});

// Action types - no need to define
export const { bugAdded, bugResolved }  = slice.actions;
export default slice.reducer;

//selectors

//export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved);

//Memoization

export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved) //here if list of bugs is not changed the computation logic is not executed again
)

 




