import {createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
let lastId = 0;

const slice = createSlice({
    name: 'bugs', //name of slice
    initialState: {
        list:[],
        loading:false,
        lastFetch:null
    },
    reducers:{

        bugsRequested: (bugs,action) =>{
            bugs.loading = true; 
        }, 

        bugsRequestFailed:(bugs,action) => {
            bugs.loading = false;
        },

        bugsReceived: (bugs, action) => {
            bugs.list = action.payload;
            bugs.loading = false;
        },

        //actions to action handler
        bugAdded:(bugs, action) =>{
            bugs.list.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
              });
        },

        bugResolved : (bugs, action) =>{
            const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
            bugs.list[index].resolved = true;
        }
    }
});

// Action types - no need to define
export const { bugAdded, bugResolved, bugsReceived, bugsRequested, bugsRequestFailed}  = slice.actions;
export default slice.reducer;

//selectors

//export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved);

//Memoization

export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.list.filter(bug => !bug.resolved) //here if list of bugs is not changed the computation logic is not executed again
)

 




