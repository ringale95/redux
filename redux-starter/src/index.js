import configureStore from "./store/configureStore";
import { apiCallBegan } from "./store/middleware/api";


const store = configureStore();

// action Creator for bugsRecieved
const bugsReceived = payload => ({ type: 'bugsReceived', bugs: payload });

const action = (dispatch)=>{
    //call an api endpoint
    const apiCall = new Promise((resolve,reject) => {reject("error"); resolve([1,2,3,4,5,6])});

    apiCall
    .then(value => dispatch(bugsReceived(value)))
    .catch( error => console.log(error));

    //when promise resolved => dispatc action 

    //if promise rejected -> dispatch another action that indicates error

    //but hwere we cant do since action is plain object so we need custom middleware
};

//action is plain object with type property
store.dispatch(apiCallBegan({
    url : '/bugs',
    method: "get",
    data: {},
    onSuccess : "bugsReceived",
    onError: "apiRequestFailed"
}));

