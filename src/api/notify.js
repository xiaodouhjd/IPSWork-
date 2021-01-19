import axios from '@/utils/api.request'

export function login(data) {
  return axios.request({
    url: '/api/Login/RequestToken',
    data,
    method: 'post'
  })
}
