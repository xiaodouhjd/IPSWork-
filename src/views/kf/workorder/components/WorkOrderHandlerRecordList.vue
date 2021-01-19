<template>
  <div class="record-box">
      <WorkOrderHandlerRecord v-for="item in recordList" :record="item"></WorkOrderHandlerRecord>
  </div>
</template>

<script>
import WorkOrderHandlerRecord from './WorkOrderHandlerRecord'
export default {
  name: 'WorkOrderHandlerRecordList',
  components:{
    WorkOrderHandlerRecord
  },
  props:{
    recordList:{
      type: Array,
      default:() =>[]
    }
  },
  data() {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>

</style>