import config from 'config';
import axios from 'axios';

export const userService = {
    login,
    logout,
    register
};

function login(email, password) {
    return axios.post(`${config.apiUrl}/login`, {email, password})
        .then(handleResponse)
        .then(user => {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    return axios.post(`${config.apiUrl}/register`, user)
        .then(handleResponse)
        .then(user => {
            return user;
        })
}

function handleResponse(response) {
    if (response.data.state === "success")
        return Promise.resolve(response.data.data);
    return Promise.reject(response.data.message);
}
