import axios from '@/utils/api.request'
import {page} from '@/utils/table-tool'

/// 获取工单
export const GetUserWorkOrders = (params) =>{
	return axios.request({
		url: '/CustomerService/api/WorkOrder/GetWorkOrders',
		params: page(params),
		method: 'get'
	})
}

// 受理工单
export const HandlerWorkOrders = (data) =>{
	return axios.request({
		url: '/CustomerService/api/WorkOrder/HandlerWorkOrders',
		data,
		method: 'post'
	})
}

// 获取单个工单信息 
export const GetWorkOrderByID = (WorkID) => {
	return axios.request({
		url: '/CustomerService/api/WorkOrder/GetWorkOrderByID',
		params:{
			WorkID
		},
		method: 'get'
	})
}

// 获取处理记录
export const GetAllWorkOrderDetaileds = (WorkID) => {
	return axios.request({
		url: '/CustomerService/api/WorkOrder/GetAllWorkOrderDetaileds',
		params:{
			WorkID
		},
		method: 'get'
	})
}
// 获取工单明细列表
export const GetWorkOrderDetaileds = (params) => {
	return axios.request({
		url: '/CustomerService/api/WorkOrder/GetWorkOrderDetaileds',
		params,
		method: 'get'
	})
}
// 添加记录
export const InsertWorkOrderDetailed = (data) => {
	return axios.request({
		url: '/CustomerService/api/WorkOrder/InsertWorkOrderDetailed',
		data,
		method: 'post'
	})
}
