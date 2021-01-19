import axios from '@/utils/api.request'

export function login(data) {
  return axios.request({
    url: '/api/Login/RequestToken',
    data,
    method: 'post'
  })
}

export function getInfo(token) {
  return new Promise((res, err) => {
    res({
      data: {
        roles: ['admin'],
        userid:  69,
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
      }
    }) 
  })
}

export function logout() {
  return new Promise((res, err) => {
    res()
  })
}
