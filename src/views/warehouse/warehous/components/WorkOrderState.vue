<template>
  <div class="state">{{state}}</div>
</template>

<script>
export default {
  name: 'WorkOrderState',
  props:{
    scope:{
      type: Object,
      default:() =>{}
    }
  },
  data() {
    return {
      
    }
  },
  computed:{
    state(){
      return '待处理'
    }
  }
}
</script>
<style lang="scss" scoped>
  .state{
    color: #F98500;
  }
</style>