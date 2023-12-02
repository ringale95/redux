import { createAction, createReducer } from '@reduxjs/toolkit';

// Action types - no need to define

// Below are action creators
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

// Reducer

let lastId = 0;

// createReducer will have initial state which is [] and action
export default createReducer([], {
  // Key : Value
  // Actions: functions that handle the actions like bugAdded = key
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },

  [bugResolved.type]: (bugs, action) => {
    // Find bug in array with id and replace resolved with true
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  }
//   },

//   [bugRemoved.type]: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     if (index !== -1) {
//       // Use splice to remove the bug from the array
//       bugs.splice(index, 1);
//     }
//   },
});
