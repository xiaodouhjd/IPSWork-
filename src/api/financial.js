import axios from '@/utils/api.request';
export const provider = () => {
    return axios.request({
        url: '/Financial/api/Provider/GetProviderList',
        params: {

        },
        data: {

        },
        method: 'get',
    })
}

export const findProvider = (params) => {
    console.log(params)
    return axios.request({
        url: '/Financial/api/Provider/GetProviders',
        params,
        data: {},
        method: 'get',
    })
}


//获取应收账单列表
export const shouOrder = (params) => {

    return axios.request({
        url: '/Financial/api/Receivable/ReceivableBills',
        params,
        method: 'get',
    })
}

export const addOrder = (data) => {
    console.log(data)
    return axios.request({
        url: '/Financial/api/Provider/InsertProvider',
        params: {

        },
        data,
        method: 'post',
    })
}
//获取应付账单列表
export const shouldPayOrder = (params) => {

    return axios.request({
        url: '/Financial/api/Payable/PaybaleBills',
        params,
        method: 'get',
    })
}


//新增应收账单
export const AddshouldOrder = (data) => {
    console.log(data)
    return axios.request({
        url: '/Financial/api/Receivable/InsertReceivableBill',

        data,
        method: 'post',
    })
}

export const shouldCheck = () => {


    return axios.request({
        url: '/Financial/api/Payable/AuditPayableBill',
        params: {

        },
        data: {

        },
        method: 'get',
    })
}

// 应收审核账单
export const shouldAudit = (params) => {
    return axios.request({
        url: '/Financial/api/Receivable/ReceivableBills',
        params,
        data: {

        },
        method: 'get',
    })
}
//审核是否通过的接口
//不通过应付账单作废
export const NopassAudit = (data) => {
    console.log(data)
    return axios.request({
        url: '/Financial/api/Payable/CancelPayableBill',
        params: {

        },
        data,
        method: 'post',
    })
}
//应付账单通过
export const passAudit = (data) => {
    console.log(data)
    return axios.request({
        url: '/Financial/api/Payable/AuditPayableBill',
        params: {

        },
        data,
        method: 'post',
    })
}
//应付账单审核列表
export const shouldPutOrder = () => {
    return axios.request({
        url: '/Financial/api/Payable/PaybaleBills',
        params: {

        },
        data: {},
        method: 'get',
    })
}

//应付账单审批通过
export const OrderShenpiPass = (data) => {
    console.log(data)
    return axios.request({
        url: '/Financial/api/Payable/ApprovalPayableBill',
        params: {

        },
        data,
        method: 'post',
    })
}

//应付账单审批不通过
export const OrderShenpiNoPass = (data) => {
    console.log(data)
    return axios.request({
        url: '/Financial/api/Payable/CancelPayableBill',
        params: {

        },
        data,
        method: 'post',
    })
}


//新增应付账单
export const addShouldPayOrder = (data) => {
    console.log(data)
    return axios.request({
        url: '/Financial/api/Payable/InsertPayableBill',
        params: {

        },
        data,
        method: 'post',
    })
}


//获取发票列表
export const getInvoiceList = () => {
    return axios.request({
        url: '/Financial/api/Invoice/FindInvoices',
        params: {

        },
        data: {},
        method: 'get',
    })
}

//

export const getInvoiceListTwo = (params) => {
    return axios.request({
        url: '/Financial/api/Invoice/FindInvoices',
        params,
        data: {},
        method: 'get',
    })
}
//获取发票列表
export const getOneInvoiceList = (params) => {
    return axios.request({
        url: '/Financial/api/Invoice/FindInvoices?beginDate=2000%2F2%2F2&endDate=2222%2F2%2F2',
        params,
        data: {},
        method: 'get',
    })
}


//查询发票
export const findInvoiceList = (params) => {
    console.log(params)
    return axios.request({
        url: '/Financial/api/Invoice/FindInvoiceByID',
        params,
        data: {},
        method: 'get',
    })
}


//获取成本分摊列表、

export const getcost = () => {
    // console.log(data)
    return axios.request({
        url: '/Warehouse/api/Other/GetNoAndFilghtNo?pageIndex=1&pageSize=20',
        params: {},
        data: {},
        method: 'get',
    })
}

//查询分摊列表
export const findCost = (data) => {
    console.log(data)
    return axios.request({
        url: '/Financial/api/Cost/FindCosts',
        params: {},
        data,
        method: 'post',
    })
}

//two


//月结列表

export const monthList = () => {
    return axios.request({
        url: '/Financial/api/BillLock/GetReceivableFlowRecord',
        params: {},
        data: {},
        method: 'get',
    })
}