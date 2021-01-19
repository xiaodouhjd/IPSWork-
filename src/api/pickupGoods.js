import axios from '@/utils/api.request'
export const getPickUpGoods = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchPrediction/GetPickUpGoodsList',
        params: {
            "PageIndex": 2,
            "PageSize": 3
        },
        data: {

        },
        method: 'get'
    })

}
export const abc = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchOutGoods/Inventory',
        params: {

        },
        data: {

        },
        method: 'get'
    })

}


export const driver = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchPrediction/SetPickUpDriver',
        params: {

        },
        data: {
            "Id": 1,
            "Name": "abc"
        },
        method: 'post',
    })
}

export const visit = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchPrediction/GetPickUpGoodsList?startTime=2000%2F2%2F2&endTime=2222%2F2%2F2&pageIndex=1&pageSize=20',
        params: {

        },
        data: {


        },
        method: 'get'
    })
}

export const findvisit = () => {
    return axios.request({
        url: '/Warehouse/api/DispatchPrediction/GetPickUpGoodsList',
        params: {

        },
        data: {


        },
        method: 'get'
    })
}

//获取轨迹列表

export const getTrack = () => {
    return axios.request({
        url: '/Warehouse/api/Trajectory/GetTrajectorys?beginTime=2000%2F2%2F2&endTime=2222%2F2%2F2&pageIndex=1&pageSize=20',
        params: {

        },
        data: {


        },
        method: 'get'
    })
}
//获取轨迹状态
export const getTrackStatu = () => {
    return axios.request({
        url: '/Warehouse/api/Trajectory/GetTrajectoryStatus',
        params: {

        },
        data: {


        },
        method: 'get'
    })
}

//轨迹签收
export const getSign = () => {
    return axios.request({
        url: '/Warehouse/api/Trajectory/SignForByIds',
        params: {

        },
        data: {


        },
        method: 'post'
    })
}

//获取轨迹节点 ID
export const getTrackNode = () => {
    return axios.request({
        url: '/Warehouse/api/Trajectory/GetTrajectoryByTbsId',
        params: {

        },
        data: {


        },
        method: 'get'
    })
}


//获取轨迹节点   运单号
export const getBillTrackNode = () => {
    return axios.request({
        url: '/Warehouse/api/Trajectory/GetTrajectoryByWaybillNo',
        params: {

        },
        data: {


        },
        method: 'get'
    })
}



//编辑轨迹节点
export const compileNode = () => {
    return axios.request({
        url: '/Warehouse/api/Trajectory/EditTrajectoryNode',
        params: {

        },
        data: {


        },
        method: 'post'
    })
}




//删除轨迹节点
export const deleteTrackNode = () => {
    return axios.request({
        url: '/Warehouse/api/Trajectory/DeleteTrajectoryNodeById',
        params: {

        },
        data: {


        },
        method: 'post'
    })
}



//新增轨迹
export const addTrack = () => {
    return axios.request({
        url: '/Warehouse/api/Trajectory/InsertTrajectoryNode',
        params: {

        },
        data: {},
        method: 'post'
    })
}