<template>
  <div >
      <el-card shadow="never">
        <div slot="header">
          <div>
            工单编号: {{_info.workNo}}
          </div>
        </div>
        <el-form>
          <el-row :gutter="20">
            <el-col :span="6">
               <el-form-item label="工单类型">{{_info.workOrderType}}</el-form-item>
            </el-col>
            <el-col :span="10">
               <el-form-item label="客户名称">{{_info.workOrderType}}</el-form-item>
            </el-col>
            <el-col :span="8">
               <el-form-item label="客服受理">{{_info.workOrderType}}</el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
               <el-form-item label="问题类型">{{_info.workOrderType}}</el-form-item>
            </el-col>
            <el-col :span="10">
               <el-form-item label="问题描述">{{_info.workOrderType}}</el-form-item>
            </el-col>
            <el-col :span="8">
               <el-form-item label="提交日期">{{_info.workOrderType}}</el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
               <el-form-item label="状态">{{_info.workOrderType}}</el-form-item>
            </el-col>
            <el-col :span="10">
            </el-col>
            <el-col :span="8">
            </el-col>
          </el-row>
        </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  name: 'WorkOrderInfo',
  components:{
    
  },
  props:{
    info:{
      type: Object,
      default: ()=>{}
    }
  },
  data() {
    return {
      createDate:"2019-08-22T17:44:17",
      csHandler:1,
      csiScore:null,
      customerID:1,
      problemID:null,
      serviceID:69,
      submitID:69,
      valid:null,
      woHandlerTime:2,
      workID:5,
      workNo:"Task1000123",
      workOrderStatus:2,
      workOrderType:0,
    }
  },
  computed:{
    _info() {
      return this.info
    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>

</style>