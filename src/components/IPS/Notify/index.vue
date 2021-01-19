<template>
  <div>
    <el-popover placement="bottom" width="400" trigger="click" popper-class="i-message-box" v-model="visible">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>消息盒</span>
          <el-button style="float: right; padding: 3px 0" type="text">清除</el-button>
        </div>
        <div>
          <ul class="notify">
            <li class="notify-item" v-for="o in tableData">
              <el-link>{{o.title}}</el-link>
            </li>
          </ul>
        </div>
      </el-card>
      <el-divider></el-divider>
      <div class="all">
        <el-button type="text">查看全部</el-button>
      </div>
      <div slot="reference">
        <el-badge :value="MsgCount" :max="99" class="item">
          <svg-icon class-name="bell-icon" icon-class="bell" />
        </el-badge>
      </div>
    </el-popover>
  </div>
</template>
<script>
export default {
  name: 'Notify',
  data() {
    return {
      MsgCount: 0,
      visible: false,
      tableData: [
        { title: '[公告] 系统于2019-8-31日升级系统于2019-8-31日升级系统于2019-8-31日升级' },
        { title: '[公告] 系统于2019-8-31日升级系统于2019-8-31日升级系统于2019-8-31日升级' },
        { title: '[公告] 系统于2019-8-31日升级系统于2019-8-31日升级系统于2019-8-31日升级' },
        { title: '[公告] 系统于2019-8-31日升级系统于2019-8-31日升级系统于2019-8-31日升级' },
        { title: '[公告] 系统于2019-8-31日升级系统于2019-8-31日升级系统于2019-8-31日升级' },
        { title: '[公告] 系统于2019-8-31日升级系统于2019-8-31日升级系统于2019-8-31日升级' }
      ]
    }
  },
  methods: {

  }
}

</script>
<style lang="scss" scoped>
.box-card{
  border: none;
  box-shadow: none;
}
.bell-icon {
  cursor: pointer;
  font-size: 22px;
  vertical-align: middle;
  font-weight: 600;
  display: flex;
}
.item{
  height: 20px;
}
.notify {
  .notify-item{
    margin:10px 0;
  }
}
.all {
  text-align: center;
}
.el-divider--horizontal{
  margin:0;
}
</style>
<style lang="scss">
.i-message-box {
  padding: 0px;
}
</style>
