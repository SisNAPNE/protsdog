import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.ifprinteligente.com.br/syspet/rest.php'
})

export default api