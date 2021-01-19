<template>
  <div class="chat-container">
    <el-row :gutter="10">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-row>
            <el-col>
              <div class="top">
                <component :is="comt" :recordList="workorder"></component>
              </div>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <el-col>
              <div class="chat-input">
                <el-input
                  type="textarea"
                  placeholder="请输入内容"
                  resize="none"
                  autofocus
                  :autosize="{ minRows: 6, maxRows: 6}"
                  >
                </el-input>
                <div class="chat-submit">
                  <el-button size="mini" type="primary" plain>转发(6)人</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8">
        <Dept></Dept>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'BeginChat',
  props: {
    comt:{
      type: Object,
      default:()=>{}
    }
  },
  inject:{
    workorder: {
      type: Array,
      default: ()=> []
    }
  },
  data() {
    return {

    }
  },
  methods: {
    resize() {
      console.log('resize')
    }
  }
}

</script>
<style lang="scss" scoped>
.chat-container{
  height: 500px;
    .top{
      height:360px;
      overflow: auto;
      display: flow-root;
    }
    .bottom{
      height:130px;
    }
}
.people-box{
  padding: 5px 0;
  box-sizing: border-box;
}
.people-box::after{
  content: '';
  display: block;
  clear: both;
}
.people-item{
  margin: 3px 5px;
  float: left;
}
.el-divider--horizontal
{
  margin: 0;
}
.chat-input{
  position: relative;
  .chat-submit{
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width: 2px;
    height: 0px;
    background-color: #F5F5F5;
}
 
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px transparent;
    border-radius: 2px;
    background-color: #F5F5F5;
}
 
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}
</style>
<style>

</style>
