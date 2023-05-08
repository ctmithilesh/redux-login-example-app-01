import { SET_LOGIN_STATUS } from "./types"

export const setLoginStatus = (dispatch, data) => {

    dispatch({
        type: SET_LOGIN_STATUS,
        payload: data
    })
}


