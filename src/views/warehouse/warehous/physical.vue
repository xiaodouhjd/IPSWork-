<template>
  <div class="bg">
    <div class="box-content">
      <div class="check">
        <div class="check_top">
          <div class="check_top__left">
            <div class="check_line">
              <span class="line1"></span>
              <span class="line2"></span>
              <span class="line3"></span>
            </div>
            <div class="check_time">
              <p>
                <input type="text" placeholder="时间" class="abbb">
              </p>
              <i class="el-icon-refresh-right" @click="right"></i>
            </div>
            <p class="jian">{{}}</p>
            <p class="all">盘点总数</p>
          </div>
          <div class="check_top__right">
            <div class="right_small1">
              <p class="jian">32</p>
              <p class="all">待支付</p>
            </div>
            <div class="right_small">
              <p class="jian">32</p>
              <p class="all">扣件</p>
            </div>
            <div class="right_small">
              <p class="jian">32</p>
              <p class="all">问题件</p>
            </div>
            <div class="right_small">
              <p class="jian">32</p>
              <p class="all">退仓</p>
            </div>
          </div>
        </div>
        <div class="check_bto">
          <div class="check_bto__top">
            <cangku></cangku>
            <cangku></cangku>
          </div>
          <div class="check_bto__bto">
            <cangku></cangku>
            <cangku></cangku>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkOrderState from "./components/WorkOrderState";
import hkAbout from "@/components/IPS/Hkabout/Habout";
import cangku from "@/components/IPS/cangku/index";
export default {
  name: "dispatch",
  components: {
    hkAbout,
    cangku
  },
  data() {
    return {
      shownewManag: {
        show: false
      },
      title: "",
      formInline: {},
      value: "",
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      options: [],
      loading: false,
      tableColumns: ConstColumns
    };
  },
  methods: {
    onSubmit() {},
    remoteMethod() {},
    sign() {
      this.shownewManag.show = !this.shownewManag.show;
      console.log(this.shownewManag.show);
    },
    right() {
      alert(2323);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" >
.container {
  min-height: calc(100vh - 84px);
}
.btn_right {
  float: right;
}
// .check {
//   // background: gray;
//   width: 1133px;
//   box-sizing: border-box;
// }
.check_top {
  display: flex;
  margin-top: 20px;
}
.check_bto {
  margin-top: 20pt;
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;
}
.check_top__left {
  width: 431px;
  height: 170px;
  background: #f2f2f2;
  margin-left: 20px;
  border-radius: 5pt;
}
.check_top__right {
  width: 1173px;
  height: 170px;
  background: #f2f2f2;
  margin-left: 26pt;
  border-radius: 5pt;
  display: flex;
  justify-content: space-around;
}
.check_line {
  width: 71pt;
  height: 71pt;
  background: #8ab3f2;
  margin: 8pt 139pt 7pt 7pt;
}
.line1 {
  background: white;
  width: 7px;
  height: 28px;
  display: inline-block;
  margin-top: 40px;
  margin-left: 20px;
}
.line2 {
  background: white;
  width: 7px;
  height: 43px;
  display: inline-block;
}
.line3 {
  background: white;
  width: 7px;
  height: 21px;
  display: inline-block;
}
.abbb {
  width: 26px;
  height: 14px;
  position: absolute;
  top: 20px;
  left: 258px;
  border: none;
  margin-top: 15px;
  font-size: 12px;
}
.el-icon-refresh-right {
  position: absolute;
  top: 34px;
  left: 290px;
}
.jian {
  margin-top: -80px;
  display: block;
  font-size: 29pt;
  margin-left: 130px;
}
.all {
  display: block;
  margin-left: 140px;
  margin-top: -30px;
  font-size: 9pt;
  color: #666666;
}
.right_small {
  margin-top: 110px;
}
.right_small1 {
  margin-left: -20px;
  margin-top: 110px;
}
.check_bto__top {
  width: 1133px;
  display: flex;
  margin-top: -10px;
}
.check_bto__bto {
  width: 1133px;
  display: flex;
  margin-top: 15px;
}
</style>
