//store에 있는 여러 reducer states 를 combineReducers를 통해 한번에 합쳐줌.
import { combineReducers } from "redux";

//인증에 관한 기능
import user from './user_reducer';

//comment 기능
//import comment from '/combine_reducer'

const rootReducer = combineReducers({
    user
})

export default rootReducer;