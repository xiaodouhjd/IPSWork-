<template>
    <el-select
      v-model="formInline.value"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="业务员"
      :remote-method="remoteMethod"
      :loading="loading">
      <el-option
        v-for="item in formInline.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
</template>

<script>
export default {
  name: 'Customer',
  props: {
    code: {
      type: String,
      default: ''
    },
    name:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      formInline:{
        
      },
      loading:false,
    }
  },
  methods: {
    remoteMethod(){

    },
  }
}
</script>

<style lang="scss" scoped>

</style>
