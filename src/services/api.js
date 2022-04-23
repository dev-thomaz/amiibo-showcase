import axios from 'axios'
const api = axios.create({
    baseURL: 'https://amiiboapi.com/api/',
})

export default api