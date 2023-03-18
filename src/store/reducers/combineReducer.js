import {majorReducer} from "./major/majorReducer";
import {combineReducers} from "redux";

export const combineReducer = combineReducers({
    major: majorReducer
})
