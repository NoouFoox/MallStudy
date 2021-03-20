import axios from "axios";

export function request(config) {
    const ax1 = axios.create({
        timeout: 5000,
        baseURL:'http://152.136.185.210:7878/api/m5'
    })
    ax1.interceptors.response.use(config => {
        return config
    }, err => {
        console.log(err)
    })
    ax1.interceptors.response.use(res => {
        return res.data.data
    }, error => {
        console.log(error)
    })
    return ax1(config)
}
