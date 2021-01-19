<template>
  <div>
    <el-drawer :visible.sync="drawer" close-on-press-escape :before-close="handleClose" size="50%" direction="rtl">
      <slot>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="运单信息" name="order">
            <el-card class="box-card">
              <div class="yundan">
                <div v-for="o in 4" :key="o" class="text item">
                  <span class="topspan">基础信息</span>
                  <p>
                    <span>客户单号</span>
                    <span>3000255</span>
                  </p>
                  <p>
                    <span>渠道转单</span>
                    <span>3000255</span>
                  </p>
                  <p>
                    <span class="huowu">货物最后操作地点</span>
                    <span class="ord">3000255</span>
                  </p>
                  <p>
                    <span>销售产品</span>
                    <span>3000255</span>
                  </p>
                  <p>
                    <span>运单状态</span>
                    <span>3000255</span>
                  </p>

                </div>
                <span class="line"></span>
                <span class="line1"></span>
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="货物信息" name="goods">货物信息</el-tab-pane>
          <el-tab-pane label="财务信息" name="financial">财务信息</el-tab-pane>
          <el-tab-pane label="客户信息" name="customer">客户信息</el-tab-pane>
          <el-tab-pane label="轨迹信息" name="trajectory">轨迹信息</el-tab-pane>
          <el-tab-pane label="提货信息" name="pickgoods">提货信息</el-tab-pane>
        </el-tabs>
      </slot>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: "WaybillInfo",
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeName: "order"
    };
  },
  methods: {
    handleClose() {
      this.$emit("drawerClose");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="scss" scoped>
.text {
  width: 300px;
  height: 300px;
  background: #f5f5f5;
  opacity: 1;
  border-radius: 10px;
  flex: 0 0 40%;
}
.yundan {
  display: flex;
  flex-wrap: wrap;
  p {
    display: flex;
    justify-content: space-around;
  }
}

.ord {
  display: inline-block;
  margin-left: -60px;
}
.line {
  width: 0px;
  height: 200px;
  border: 1px solid rgba(112, 112, 112, 1);
  opacity: 1;
  position: absolute;
  left: 400px;
}
.line1 {
  width: 0px;
  height: 200px;
  border: 1px solid rgba(112, 112, 112, 1);
  opacity: 1;
  position: absolute;
  left: 400px;
  top: 320px;
}
.topspan {
  display: block;
  margin-left: 60px;
}
</style>
