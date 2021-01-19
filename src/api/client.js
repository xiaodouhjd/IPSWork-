import axios from '@/utils/api.request'
export const client = () => {
  return axios.request({
    url: '/Warehouse/api/DispatchPrediction/GetCustomerSendGoods',
    params: {



    },
    data: {

    },
    methods: 'get'
  })
}

