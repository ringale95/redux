import axios from 'axios';

export const apiCallBegan = payload => {return ({
    type : 'apiCallBegan',
    payload: payload
});}

const api = ({ dispatch }) => next => async action => {
 if(action.type !== "apiCallBegan") return next(action);
 
 next(action);

 const { url, method, data, onSuccess, onError } = action.payload;
 //we will make api call using axios

    try{
        const response = await axios.request({
        baseURL: "http://localhost:9003/api",
        url, //bugs
        method,
        data
    });
        dispatch({ type: onSuccess, payload: response.data });
    }catch(error){
        dispatch({ type: onError, payload: error })
    }
}
export default api;