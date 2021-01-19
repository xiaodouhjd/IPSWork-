<template>
  <el-select 
    v-model="selectVal" 
    clearable
    filterable
    :placeholder="placeholder" 
    class="select-customer">
    <el-option v-for="item in options" :key="item.basisValue" :label="item.basisText" :value="item.basisValue">
    </el-option>
  </el-select>
</template>

<script>
import { BasisData } from '@/api/basis'
export default {
  name: 'Select',
  props: {
    value:{
      type:[String, Number,Boolean]
    },
    placeholder:{
      type:String,
      default: ''
    },
    selectKey:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      list:[]
    }
  },
  computed:{
    selectVal: {
      get() {
        return this.value || ''
      },
      set(val) {
        this.$emit('update:value', val)
      }
    },
    options() {
      return this.list;
    }
  },
  created(){
    this.getData()
  },
  methods: {
    async getData() {
      this.list = await BasisData(this.selectKey)
    }
  }
};
</script>

<style lang="scss" scoped>
// .select-customer {
//   margin-left: -20px;
// }
</style>
