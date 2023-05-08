import { SET_LOGIN_STATUS, SET_USER_LOGIN } from "../actions/types"

const initialState = {
    token: null,
    login_status: false
}

const loginReducer = (state = initialState, action)=>{

    const newState = {...state}

    switch(action.type){


            case SET_USER_LOGIN:
                console.log('SET_USER_LOGIN')
                return{
                    ...newState,
                    token: action.payload
                }
            case SET_LOGIN_STATUS:
                return{
                    ...newState,
                    login_status: action.payload
                }
            default:
                return newState

    }




}
export default loginReducer;