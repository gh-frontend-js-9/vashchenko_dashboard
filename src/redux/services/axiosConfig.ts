import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.baseURL = `https://geekhub-frontend-js-9.herokuapp.com`;
axios.defaults.headers.common['x-access-token'] = sessionStorage.token ;
