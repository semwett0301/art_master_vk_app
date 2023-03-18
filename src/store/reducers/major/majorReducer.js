import majorActionTypes from "./majorActionTypes";
import {configNameToAlias} from "../../../pages/PortfolioPage/config";

export const majorReducer = (state = '', action) => {
    switch (action.type) {
        case majorActionTypes.SET_MAJOR:
            return action.payload
        default:
            return state
    }
}
