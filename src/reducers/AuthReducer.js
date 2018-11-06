import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, COOKIES_CHECKED, USER_LOGOUT, USER_REGISTER_FAIL } from '../actions/types.js';

const INITIAL_STATE = { firstname: "", lastname: "", phone: "", email: "", password: "", error: "", id: "", cookieCheck: false}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case USER_LOGIN_SUCCESS :
            return {...action.payload, cookieCheck: true};
        case USER_LOGIN_FAIL:
            return {...state, error: "Authentication Error"}
        case USER_REGISTER_FAIL:
            return {...state, error: "Username/E-mail is already used"}
        case COOKIES_CHECKED:
            return {...state, cookieCheck: true}
        case USER_LOGOUT:
            return INITIAL_STATE;
        default :   
            return state;
    }
}