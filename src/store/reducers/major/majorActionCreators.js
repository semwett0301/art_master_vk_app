import majorActionTypes from "./majorActionTypes";

export const setMajorActionCreator = (payload) => {
    return {
        type: majorActionTypes.SET_MAJOR,
        payload: payload
    }
}
