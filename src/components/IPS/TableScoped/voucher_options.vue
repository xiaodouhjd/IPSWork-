<template>
  <div>
      <span @click="view"></span>
      <svg-icon icon-class="eye-open" class="icon" />
      <el-link :underline="false" type="primary" @click="view">查看</el-link>
      <el-divider direction="vertical"></el-divider>
      <el-link :underline="false" type="primary" @click="problem">问题件</el-link>
      <el-divider direction="vertical"></el-divider>
      <el-link :underline="false" type="primary" @click="voucher">录单</el-link>
  </div>
</template>

<script>
export default {
  name:'voucher_options',
  scope:{
    type: Object,
    default:() =>{}
  },
  inject:{
    voucher:{
      type: Function,
      default:()=>{}
    },
    problem:{
      type: Function,
      default:()=>{}
    },
    view:{
      type: Function,
      default:()=>{}
    }
  },
  data() {
    return {
      
    }
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .icon{
    color: #1890FF;
    margin-right: 2px;
  }
</style>
