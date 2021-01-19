<template>
  <div>
      <el-tooltip content="处理" placement="top">
          <i class="el-icon-arrow-right circle" style="color:blue" @click="click"/>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkOrderHandlerBtn',
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
  methods:{
    click() {
      console.log('1');
      const rote = {
        name : 'workorderhandler'
      }
      this.$router.push(rote)
    }
  }
}
</script>
<style lang="scss" scoped>
  .state{
    color: #F98500;
  }
  .circle:hover
  {
    cursor:pointer;
    line-height:20px;
    width:20px;
    height:20px;
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 6px rgba(37,106,209,0.3);
    border-radius:50%;
  }
</style>