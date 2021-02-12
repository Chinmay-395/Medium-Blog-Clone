import {
AUTH_START,
AUTH_SUCCESS,
AUTH_FAIL,
AUTH_LOGOUT
} from './authActionsTypes';

import axios from 'axios'

export const authStart = () => {
    return {
        type: AUTH_START
    }
}
export const authSuccess = (token) => {
  console.log("THE TOKEN",token)
    return {
        type: AUTH_SUCCESS,
        payload: token
    }
}

export const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        payload: error
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: AUTH_LOGOUT,
        payload: null
    };
};

export const authLogout = () => (dispatch) => {
    dispatch(authStart())
    dispatch(logout())
};

export const authLogin = (username,email, password) => (dispatch) => {
    console.log("Authentication is enabled")
    console.log(username,email,password)
    dispatch(authStart());
    axios.post(`http://127.0.0.1:8000/dj-rest-auth/login/`, {
        "username": username,
        "email":email,
        "password": password
    }).then(response => {
        const token = response.data.key;
        console.log("THE RESPONSE",response.data)
        const name = response.data.name
        localStorage.setItem('token', token);
        dispatch(authSuccess(token));
    }).catch(error => {
        console.log("THE RESPONSE",error.message)
      dispatch(authFail(error.message))
    })

}

export const authSignup = (username, email, password) => (dispatch) => {
    dispatch(authStart());
    axios.post(`http://127.0.0.1:8000/api/profile/`, {
        username: username,
        email: email,
        password: password
    }).then(response => {
        const token = response.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // 1 hour
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authSuccess(token));
    }).catch(error => dispatch(authFail(error.message)))
}