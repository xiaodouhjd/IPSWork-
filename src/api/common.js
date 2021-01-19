import axios from '@/utils/api.request'
//这里面可以做缓存

// 获取ID 货 键  ， 返回 对象  { a:[...] } 或  [....]
export const getOnlyVaule = (dataList,fn) =>{
	let onlyVal = new Set([...dataList].map(fn))
	return [...onlyVal]
}


// 解析 table
export const parseData = (dataList, fn) => {
	let result = [...dataList].map(x =>{
	    let temp = fn(x)
	    return { ...x, name: temp.name }
	})
	return result
}


// 远程或本地  获取客户
export const CustomerArray = async (data) =>{
	return await axios.request({
		url: '/Warehouse/api/Common/GetCustomerDic', //获取客户的URL
		data,
		method: 'post'
	}).then(res =>res.DataList)
}