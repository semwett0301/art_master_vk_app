import {majorReducer} from "./major/majorReducer";
import {combineReducers} from "redux";
import {userIdReducer} from "./userId/userIdReducer";

export const combineReducer = combineReducers({
    major: majorReducer,
    userId: userIdReducer
})
