import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

if(localStorage.getItem('token')){
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
}