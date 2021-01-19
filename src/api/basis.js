import axios from '@/utils/api.request'
import { localSave, localRead } from '@/utils'

/// 获取字典 

// 客户选择
export const Customer = async (params) => {
	return await axios.request({
		url: '/Warehouse/api/Common/GetCustomerDic', //获取客户的URL
		params,
		method: 'get'
	}).then(res => res.DataList)
}

// 客服字典
export const BasisData = async (BasisType) => {
	return localRead(BasisType) || await axios.request({
		url: '/CustomerService/api/Basis/GetBasisDataByBasisType',
		params: {
			BasisType
		},
		method: 'get'
	}).then(res => {
		localSave(BasisType, res)
		return res
	})
}

// 机构基础数据
export const getBranch = async () => {
	let key = 'Branch'
	return localRead(key) || axios.request({
		url: '/Warehouse/api/Common/GetBranchDropdown',
		method: 'get',
	}).then(res => {
		localSave(key, res)
		return res
	})
}

export const getgoal = async () => {
	let key = 'goal'
	return localRead(key) || axios.request({
		url: '/Warehouse/api/Common/GetChannelDropdown',
		method: 'get',
	}).then(res => {
		localSave(key, res)
		return res
	})
}