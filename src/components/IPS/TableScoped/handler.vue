<template>
  <div>
      <el-tooltip content="处理" placement="top">
          <i class="el-icon-arrow-right circle" style="color:blue" @click="handerClick"/>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Handler',
  props:{
    scope:{
      type: Object,
      default:() =>{}
    }
  },
  inject:{
    hander:{
      type: Function,
      default:()=>{}
    }
  },
  data() {
    return {
      
    }
  },
  methods:{
    handerClick() {
      this.hander(this.scope)
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
    line-height:23px;
    width:23px;
    height:23px;
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 6px rgba(37,106,209,0.3);
    border-radius:50%;
  }
</style>