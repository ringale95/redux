import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer'; // Replace with the correct path to your reducers
import logger from './middleware/logger';

export default function() {
 return configureStore({ 
    reducer,
    middleware: [logger]
});
  }
 

