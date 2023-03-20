import userIdActionTypes from "./userIdActionTypes";

export const userIdReducer = (state = '', action) => {
    switch (action.type) {
        case userIdActionTypes.SET_ID:
            return action.payload
        default:
            return state
    }
}
