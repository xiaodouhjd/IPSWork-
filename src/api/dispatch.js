import axios from '@/utils/api.request'
export const forecast = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchPrediction/GetCustomerSendGoods?startTime=2000%2F5%2F5&endTime=2222%2F8%2F8&pageIndex=1&pageSize=20',
        params: {

        },
        data: {

        },
        method: 'get',
    })

}

export const inforecast = () => {
    // var newData = {};
    return axios.request({
        url: '/Warehouse/api/Common/GetCustomer?pageIndex=1&pageSize=20',
        params: {

        },
        data: {

        },
        method: 'get',
    })

}



export const track = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchPrediction/GetBranchAllocationListForHangBan',

        params: {

        },

        data: {

        },

        method: 'get',
    })
}


export const flight = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/GetWatiHandleGoods',

        params: {

        },

        data: {

        },

        method: 'get',
    })
}
export const wade = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/GetWatiHandleGoods?pageIndex=1&pageSize=20',

        params: {

        },

        data: {

        },

        method: 'get',
    })
}

export const kobe = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchPrediction/SetToAddress',

        params: {

        },

        data: {

        },

        method: 'post',
    })
}
export const common = () => {
    return axios.request({
        url: '/Warehouse/api/Common/GetBranchDropdown',

        params: {

        },

        data: {

        },

        method: 'get',
    })
}

//   生成出库单
export const chukudan = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/GetOutTaskList',

        params: {

        },

        data: {

        },

        method: 'get',
    })
}

export const ticket = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/GetChaiHePiaoWaybill?pageIndex=1&pageSize=20&type=C',

        params: {

        },

        data: {

        },

        method: 'get',
    })
}


export const orderPlan = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/GetOutPlan?startTime=2000%2F2%2F2&endTime=2222%2F2%2F2&pageIndex=1&pageSize=20',

        params: {

        },

        data: {

        },

        method: 'get',
    })
}

// 获取仓库货物列表
export const chukuPlan = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/GetGoodsFromWareHouse?startTime=2002%2F2%2F2&pageIndex=1&pageSize=20',

        params: {

        },

        data: {

        },

        method: 'get',
    })
}

//生成出库单
export const createOrder = (data) => {
    console.log(data)
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/CreateOutGoodsTask?startTime=2002%2F2%2F2&pageIndex=1&pageSize=20',

        params: {

        },
        data,

        method: 'post',
    })
}

export const branch = () => {
    return axios.request({
        url: '/Warehouse/api/Common/GetBranchDropdown',

        params: {

        },

        data: {

        },

        method: 'get',
    })
}

export const baseApi = () => {
    return axios.request({
        url: '/Warehouse/api/Common/GetChannelDropdown',

        params: {

        },

        data: {

        },

        method: 'get',
    })
}

export const findOrder = (params) => {
    console.log(params)
    return axios.request({
        url: '/Warehouse/api/DispatchPrediction/GetCustomerSendGoods',

        params,

        data: {

        },

        method: 'get',
    })
}

export const newfindOrder = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/GetChaiHePiaoWaybill?oldNo=300990002&pageIndex=1&pageSize=20&type=C',

        params: {},

        data: {

        },

        method: 'get',
    })
}

export const allCangku = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/GetChaiHePiaoWaybill?oldNo=300990002&pageIndex=1&pageSize=20&type=C',

        params: {},

        data: {

        },

        method: 'get',
    })
}

export const findchukuOrder = (params) => {
    console.log(params)
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/GetGoodsFromWareHouse?Waybill=300998947&startTime=2002%2F2%2F2&pageIndex=1&pageSize=20',

        params,

        data: {

        },

        method: 'get',
    })
}
//查看发车单列表
export const facheOrder = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/GetOutTaskList?startTime=2000%2F2%2F2&endTime=2222%2F2%2F2&outTaskId=0&pageIndex=1&pageSize=20',

        params: {},

        data: {},

        method: 'get',
    })
}


//生成发车单
export const endfache = (data) => {
    console.log(data)
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/CreateStartTruck',

        params: {},

        data,

        method: 'post',
    })
}

//发车单列表
export const facheList = () => {
    return axios.request({
        url: '/Warehouse/api/OutHouse/GetLoadingGoodsTaskList?date=2019%2F9%2F3',

        params: {},

        data: {},

        method: 'get',
    })
}

//查询发车单列表
export const findFacheList = (params) => {
    console.log(params)
    return axios.request({
        url: '/Warehouse/api/OutHouse/GetLoadingGoodsTaskList?date=2019%2F9%2F3',

        params,

        data: {},

        method: 'get',
    })
}

//获取发出预报列表
export const getGiveList = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchPrediction/GetBranchAllocationList?startTime=2000%2F2%2F2&endTime=2222%2F2%2F2&pageIndex=1&pageSize=20',

        params: {},

        data: {},

        method: 'get',
    })
}

//获取接收预报列表
export const getTakeList = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchPrediction/GetBranchGoods?startTime=2000%2F2%2F2&endTime=2222%2F2%2F2&pageIndex=1&pageSize=20',

        params: {},

        data: {},

        method: 'get',
    })
}