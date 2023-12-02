import { configureStore } from '@reduxjs/toolkit';
import reducer from './bugs'; // Replace with the correct path to your reducers

export default function() {
 return configureStore({ reducer });
  }


