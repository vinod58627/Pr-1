/*import { configureStore} from "@reduxjs/toolkit";
//import counterReducer from "./counterReducer";
import userReducer from "./LogReducer";
//import thunk from "redux-thunk";
//import logger from "redux-logger";
const store = configureStore({
    reducer :{
    //counter : counterReducer,
    user : userReducer,
    
    },
}
)
export default store;*/


import reducer from "./reducer1";
import { createStore } from 'redux'

const store = createStore(reducer)
export default store
