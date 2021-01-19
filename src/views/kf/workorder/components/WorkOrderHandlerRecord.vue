<template>
  <div class="record">
      <div class="header">
        <el-avatar size="small" :src="record.circleUrl || circleUrl"></el-avatar>
        <div class="header-text">
          <div>{{record.nickName}}</div>
        </div>
      </div>
      <div class="joint">
        <div>{{record.explain}}</div>
      </div>
      <div class="date">
        <div v-if="record.joint.length > 0">
          同步信息: 
           <span>
            <el-tag
              hit size="mini"
              v-for="item in record.joint"
              :key="item.label"
              :type="item.type"
              effect="plain">
              {{ item.label }}
            </el-tag>
          </span>
        </div>
        <div class="time">
          {{record.datetime}}
        </div>
      </div>
      <el-divider />
  </div>
</template>

<script>
export default {
  name: 'WorkOrderHandlerRecord',
  props:{
    record:{
      type: Object,
      default:() =>{}
    }
  },
  data() {
    return {
      size:'small',
      circleUrl:'http://thirdwx.qlogo.cn/mmopen/dqIMbXw4HyboKWUSB9S0k7jZ9yNLHeicAuEicCGic9EKZMyLPVXjD57icIU8pQpkBBeiasgWQfQshkrY80DWLMlnkVTR7fpF7s2Qk/132',
    }
  },
  methods:{
    click() {
      
    }
  }
}
</script>
<style lang="scss" scoped>
.record{
  font-size: 14px;
}
.record > div{
  margin:10px;
}
.header{
  display: flex;
  align-items: center;
  .header-text
  {
    margin-left : 10px;
  }
}
.joint{
  padding:10px;
}
.date{
  margin-left:5px;
  .time{
    margin: 5px 0
  }
}
</style>