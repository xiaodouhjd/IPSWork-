<template>
  <div class="i-nav-menu">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
      </div>
      <div class="box-card">
        <el-tabs tab-position="right" class="navmenu" @tab-click="change">
          <el-tab-pane :label="item.title" :key="item.path" v-for="item in list" :name="item.path"></el-tab-pane>
        </el-tabs>
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
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    activeName() {
      return this.active;
    }
  },
  data() {
    return {};
  },
  methods: {
    change(item) {
      this.$emit("click", item);
    }
  }
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
<style type="text/css">
.navmenu .el-tabs__nav-wrap::after {
  background-color: transparent;
}

.navmenu .el-tabs__nav .el-tabs__active-bar {
  width: 3px;
}

.i-nav-menu .el-card__body {
  padding-left: 0;
}

.i-nav-menu .el-tabs__header {
  margin-left: 0;
}
</style>
