<template>
    <Table 
      :data="tableData" 
      :columns="tableColumns"
      :page = "page"
      :limit = "limit"
      :total = "total"
      ></Table>
</template>

<script>
import voucher_options from '@/components/IPS/TableScoped/voucher_options'
const ConstData = ()=>{
  let result = [];
  for (let i = 0; i< 100; i++) {
      let s = (i*2);
      result.push({Age:i,ID:s})
  }
  return result
} 
const ConstColumns = [{

  label: '状态',
  prop: 'ID',
  width: '90'
},
{

  label: '单号',
  prop: 'Age',
},{

  label: '下单时间',
  prop: 'ID',
},{

  label: '件数',
  prop: 'ID',
  width: '170',
},{

  label: '重量(KG)',
  prop: 'ID',
  width: '100',
},{

  label: '发票',
  prop: 'ID',
  width: '170',
  align: 'center'
},{

  label: '操作',
  scoped: voucher_options,
  align: 'center',
  width: '200',
  fixed: 'right'
}]
export default {
  name: 't_voucher',
  data() {
    return {
        page :0,
        limit :20,
        total : 100,
        tableColumns: ConstColumns,
    }
  },
  computed:{
    tableData(){
      let result = [];
      let i = this.page;
      for (; i <= (this.page + 1) * this.limit; i++) {
          let s = (i*2);
          result.push({Age:i,ID:s})
      }
      return result
    } 
  },
  provide() {
    return {
      voucher: this.voucher,
      problem: this.problem,
      view: this.view
    }
  },
  methods: {
    voucher(){
      const router = {
        name : 'voucherhandler'
      }
      this.$router.push(router)
    },
    problem(){
      console.log(12);
    },
    view(){
      console.log(13);
    }
  }
}
</script>
