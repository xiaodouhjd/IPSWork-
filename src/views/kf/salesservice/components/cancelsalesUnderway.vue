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
const ConstData = ()=>{
  let result = [];
  for (let i = 0; i< 100; i++) {
      let s = (i*2);
      result.push({Age:i,ID:s})
  }
  return result
} 
const ConstColumns = [{

  label: '退仓状态',
  prop: 'ID',
  width: '90'
},
{

  label: '客户编号',
  prop: 'Age',
},{

  label: '客户名称',
  prop: 'ID',
},{

  label: '附加服务',
  prop: 'ID',
  width: '170',
},{

  label: '申请日期',
  prop: 'ID',
  width: '100',
},{

  label: '申请人',
  prop: 'ID',
},{

  label: '收件人',
  prop: 'ID',
  width: '70',
},{

  label: '收件人电话',
  prop: 'ID',
  width: '100',
},{

  label: '收件人地址',
  prop: 'ID',
}]
export default {
  name: 'cancelsalesUnderway',//退仓中
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
    
  },
  methods: {
    
  }
}
</script>
