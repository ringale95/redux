import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer'; // Replace with the correct path to your reducers
import logger from './middleware/logger';
import func from './middleware/func';
import api from './middleware/api';

export default function() {
 return configureStore({ 
    //here order matters
    reducer,
    middleware: [
        ...getDefaultMiddleware(),
        logger("console"),
        func,
        api
    ]
});
  }
 

