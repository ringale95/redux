import axios from 'axios';
import * as actions from '../api';

const api = ({ dispatch, getState }) => next => async action => {
    if(action.type !== actions.apiCallBegan.type ) return next(action);
    
    const { url, method, data, onSuccess, onError } = action.payload;

    // Continue with middleware chain
    next(action);

    try{
        // Call API
        const response = await axios.request({
            baseURL: 'http://localhost:9001/api',
            url,
            method,
            data
        });
        // Resolved: dispatch success
        dispatch({ type: onSuccess, payload: response.data });

    }catch(error){
        // Rejected: dispatch error
        dispatch({ type: onError, payload: error });
    }

}

export default api;