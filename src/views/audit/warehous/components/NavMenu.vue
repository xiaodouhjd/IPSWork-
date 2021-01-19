<template>
  <div class="i-nav-menu">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
      </div>
      <div class="box-card">
        <el-menu default-active="0">
          <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <span slot="title">预报详情</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">发车详情</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">航空详情</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    title: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "200px"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.i-nav-menu {
  background-color: #eef1f6;
  padding: 15px;
}
.el-menu {
  border-right: 0px;
}
</style>
