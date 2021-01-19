<template>
  <el-select 
    v-model="selectVal" 
    filterable 
    remote 
    placeholder="客户编码或名称" 
    default-first-option
    :remote-method="remoteMethod" 
    :loading="loading" 
    class="select-customer">
    <el-option v-for="item in options" :key="item.customerCode" :label="item.customerName" :value="item.customerId">
    </el-option>
  </el-select>
</template>

<script>
import { Customer } from '@/api/basis'
export default {
  name: 'Customer',
  props: {
    value:{
      type: Number,
      default: ''
    }
  },
  data() {
    return {
      options: [],
      loading: false,
    };
  },
  computed:{
    selectVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('update:value', val)
      }
    }
  },
  methods: {
    async remoteMethod(val) {
      let params = { code: val, name: val };
      this.options = await Customer(params)
    }
  }
};
</script>

<style lang="scss" scoped>
// .select-customer {
//   margin-left: -20px;
// }
</style>
