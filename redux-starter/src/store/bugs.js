import {createSlice } from '@reduxjs/toolkit';
let lastId = 0;

const slice = createSlice({
    name: 'bugs', //name of state
    initialState: [],
    reducer:{
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
export default createSlice.reducer;
 




