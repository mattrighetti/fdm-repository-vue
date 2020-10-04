import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: "http://www.fdm.polimi.it/api"
    })
}