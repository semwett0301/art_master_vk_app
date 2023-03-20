import userIdActionTypes from "./userIdActionTypes";

export const setUserIdActionCreator = (id) => {
    return {
        type: userIdActionTypes.SET_ID,
        payload: id
    }
}
