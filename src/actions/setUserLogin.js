import { SET_USER_LOGIN } from "./types"

export const setUserLogin = (dispatch, data) => {

    dispatch({
        type: SET_USER_LOGIN,
        dispatch: data
    })
}


