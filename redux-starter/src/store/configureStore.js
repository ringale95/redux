import { configureStore } from '@reduxjs/toolkit';

import reducer from './bugs'; //if we havent export using default then we have to do {reducer}

export default function(){
const store = configureStore({
    reducer
});
}