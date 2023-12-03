import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import reducer from './reducer';
import func from './middleware/func';
import api from './middleware/api';
import logger from './middleware/logger';

export default function() {
    return configureStore({
      reducer,
      middleware: [
        ...getDefaultMiddleware(),
        logger({ destination: "console" }),
        func,
        api
      ]
    });
  }

