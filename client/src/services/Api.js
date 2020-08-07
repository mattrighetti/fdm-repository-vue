import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'http://172.20.10.2:5000'
    })
}