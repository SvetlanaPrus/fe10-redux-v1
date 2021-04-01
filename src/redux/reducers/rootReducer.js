import studentReducer from "./studentReducer";
import universityReducer from "./universityReducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    studentReducer: studentReducer,
    universityReducer: universityReducer,
})

export default rootReducer;



