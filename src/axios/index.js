import axios from 'axios';
import baseURL from "./baseURL";
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const refreshAuthLogic = failedRequest => axios.post(`${baseURL}/api/v1/auth/accounts/token`).then(tokenRefreshResponse => {
    localStorage.setItem('token', tokenRefreshResponse.data.token);
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.token;
    return Promise.resolve();
});

createAuthRefreshInterceptor(axios, refreshAuthLogic);

export default axios