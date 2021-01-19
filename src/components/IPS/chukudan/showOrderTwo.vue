<template>
  <div>
    <div ref="myref" v-show="xianshi">
      <el-dialog :title="show.title" :visible.sync="show" custom-class="createOtwo">
        <div class="order_top" v-show="xianshi">
          <p class="faCar">生成发车单</p>
          <p class="yugu">货物预估重量总和≈35KG</p>
          <p class="tuijian">（推荐1两大型货车，1两中型货车）</p>
          <div class="car">
            <p>
              <span>选择车型</span>
              <button class="fcbtn" @click="chouse">小型货车12~20KG</button>
              <button class="fcbtn" @click="chouseTwo">中型货车12~20KG</button>
            </p>
            <p class="bigcar">
              <button class="fcbtn" @click="bigCar">大型货车20KG以上</button>
            </p>
            <p class="cartime">
              <span>发车时间</span>
              <el-date-picker v-model="value1" type="date" placeholder="选择日期" class="time">
              </el-date-picker>
            </p>
            <p class="cardiver">
              <span>司机</span>
              <el-input v-model="input" placeholder="请输入内容" class="diver" ref="diref"></el-input>
            </p>
          </div>
        </div>
        <div class="order_bto" v-show="xianshi">
          <el-button type="primary" class="btnX" @click="nextAdd">下一步</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    OutTaskIds: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      sendData: {
        StartTime: "2019-09-03T11:44:00.039Z",
        Driver: 1,
        CarLicenseNo: 1,
        CarType: 1
      },
      input: "",
      value1: "",
      xianshi: true,
      xianshi1: false,
      radio: "1",
      open: false,
      form: {
        name: ""
      }
    };
  },
  computed: {
    fromData() {
      return {
        ...this.sendData,
        ...{ OutTaskIds: this.OutTaskIds }
      };
    }
  },
  methods: {
    nextAdd() {
      this.xianshi = !this.xianshi;
      this.$emit("xiaodou", {
        onshow: false,
        didshow: true
      });
      let chukuorderData = this.fromData;
      this.$center.$emit("send-newData", chukuorderData);
      let newValue = this.$refs.diref.value;
      this.$center.$emit("send-value", newValue);
      let sendData = this.sendData;
      this.$center.$emit("send-obj", sendData);
      let data = this.sendData;
    },
    chouse() {},
    chouseTwo() {},
    bigCar() {}
  }
};
</script>
<style>
.createOtwo {
  width: 414px;
  height: 577px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-radius: 10px;
}
.faCar {
  display: block;
  color: black;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
}
.yugu {
  display: block;
  color: #e9690b;
  font-size: 12px;
  margin-top: 15px;
}
.tuijian {
  display: block;
  color: #999999;
  font-size: 12px;
  margin-top: 10px;
}
.carcheck {
  display: inline-block;
  color: #999999;
  font-size: 14px;
  margin-top: -15px;
  opacity: 1;
  color: #666666;
}
.mincar {
  display: inline-block;
  width: 100px;
  height: 45px;
  border: 1px solid #b2b2b2;
  opacity: 1;
  margin-top: 15px;
  margin-left: 10px;
}
.mincar1 {
  display: inline-block;
  width: 100px;
  height: 45px;
  border: 1px solid #b2b2b2;
  opacity: 1;
  margin-top: -15px;
  margin-left: 15px;
}
.mincar2 {
  width: 100px;
  height: 45px;
  border: 1px solid #b2b2b2;
  opacity: 1;
  margin-top: 15px;
  margin-left: 132px;
  background: #256ad1;
  border: none;
}
.btnX {
  position: absolute;
  bottom: 50px;
  right: 20px;
}
.diver {
  width: 220px;
  height: 38px;
  opacity: 1;
}

.cartime {
  margin-top: 20px;
}
.cardiver {
  margin-top: 20px;
  margin-left: 30px;
}
.fcbtn {
  width: 100px;
  height: 45px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(178, 178, 178, 1);
  opacity: 1;
  border-radius: 5px;
}
.bigcar {
  margin-left: 100px;
}
</style>
