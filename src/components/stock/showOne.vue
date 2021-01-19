<template>
  <div>
    <div ref="myref" v-show="xianshi">
      <el-dialog :title="show.title" :visible.sync="show" custom-class="createOrderTwo" :modal="false" :modal-append-to-body="false" :show-close=false>
        <div class="imgNike">
          <!-- <img src="@/images/image3.png" alt=""> -->
        </div>
        <p>生成出库单</p>
        <div>
          <div class="model"><span class="span">航班号</span> <input type="text" class="inputAll" placeholder="CZ369852"></div>
          <div class="model"><span class="span">提单号</span> <input type="text" class="inputAll2" placeholder="--"></div>
          <div class="model"><span class="span3">预计出发时间</span> <input type="text" class="inputAll3" placeholder="--"></div>
          <div class="model"><span class="span3">预计到达时间</span> <input type="text" class="inputAll3" placeholder="--"></div>
          <div class="model"><span class="span3">实际出发时间</span> <input type="text" class="inputAll3" placeholder="--"></div>
          <div class="model"><span class="span3">实际到达时间</span> <input type="text" class="inputAll3" placeholder="--"></div>
        </div>
      </el-dialog>
    </div>
  </div>

</template>
<script>
export default {
  props: ["show"],

  data() {
    return {
      xianshi: true,
      radio: "1",
      open: false,
      //   dialogFormVisible: true,
      form: {
        name: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    add() {
      // alert(2323);
      console.log(123);
      this.xianshi = !this.xianshi;
      this.xianshi1 = 1;
      this.$emit("cp3", {
        onshow: false,
        didshow: true
      });
    }
  }
};
</script>
<style >
.createOrderTwo {
  width: 204pt;
  height: 246pt;
  background: bisque;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -230pt);
}
.imgNike {
  width: 31pt;
  height: 31pt;
  margin-left: 110px;
}
.model {
  margin-top: 10px;
  display: flex;
}
.inputAll1 {
  width: 50px;
  height: 20px;
  border: none;
  margin-left: 25px;
}
.inputAll {
  width: 140px;
  height: 20px;
  border: none;
  margin-left: 25px;
}
.inputAll2 {
  width: 140px;
  height: 20px;
  margin-left: 15px;
  border: none;
  margin-left: 25px;
}
.inputAll3 {
  width: 100px;
  height: 20px;
  margin-left: 15px;
  border: none;
  margin-left: 25px;
}
.span3 {
  display: inline;
  font-size: 7pt;
}

.span {
  display: inline;
  font-size: 7pt;
}
</style>
