import axios from 'axios'
const api = axios.create({
    baseURL: 'http://amiiboapi.com/api/',
})

export default api