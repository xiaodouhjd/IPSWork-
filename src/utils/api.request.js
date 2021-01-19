import HttpRequest from '@/utils/axios'
//import config from '@/config'
const baseUrl = 'http://192.168.50.222:7500' //process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)
export default axios