import {
AUTH_START,
AUTH_SUCCESS,
AUTH_FAIL,
AUTH_LOGOUT
} from './authActionsTypes';

const initialState = {
    token: null,
    error: null,
    loading: false
}

const Auth_reducer = (state = initialState, action) => {
    console.log("THE PAYLOAD",action.payload)
    switch (action.type) {
        case AUTH_START:
            return { ...state, token: null, error: null, loading: true }
        case AUTH_SUCCESS:
            console.log("I ran")
            return { ...state, token: action.payload, error: null, loading: false }
        case AUTH_FAIL:
            return { ...state, token: null, error: action.payload, loading: false }
        case AUTH_LOGOUT:
            return { ...state, token: action.payload, error: null, loading: false }
        default:
            return state;
    }
}
export default Auth_reducer;