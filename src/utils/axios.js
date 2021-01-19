import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import store from '@/store'
class HttpRequest {
	constructor(baseUrl = baseURL) {
		this.baseUrl = baseUrl
		this.queue = {}
	}
	getInsideConfig() {
		const config = {
			baseURL: this.baseUrl,
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ` + getToken()
			},
			timeout: 3000
		}
		return config
	}
	destroy(url) {
		delete this.queue[url]
		if (!Object.keys(this.queue).length) {
			console.log('销毁axios')
		}
	}
	interceptors(instance, url) {
		//请求拦截
		instance.interceptors.request.use(config => {
			//全局 loading...
			if (!Object.keys(this.queue).length) {
				console.log('创建axios')
			}
			this.queue[url] = true
			return config
		}, error => {
			return Promise.reject(error)
		})
		//响应拦截
		instance.interceptors.response.use(res => {
			this.destroy(url)
			const { data, status } = res
			if (status == '500') {
				Message({
					message: '请求超时',
					type: 'error'
				})
				return Promise.reject();
			}
			return Promise.resolve(data.body || data);
		}, error => {
			this.destroy(url)
			const { status } = error.response
			if (status === 401) {
				Message({
					message: '登录超时',
					type: 'error'
				});
			}else if (status === 500) {
				Message({
					message: '服务器错误',
					type: 'error'
				});
			}else
			//  if() {

			// } else
			{
				Message({
					message: '请求超时',
					type: 'error'
				});
			}
			//错误业务逻辑操作
			return Promise.reject(error)
		})
	}
	request(options) {
		const instance = axios.create()
		options = Object.assign(this.getInsideConfig(), options)
		this.interceptors(instance, options.url)
		return instance(options)
	}
}
export default HttpRequest