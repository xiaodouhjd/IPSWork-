<template>
  <div>
    <div class="conta">
      <div class="c_top">
        <div class="pay">
          <span class="pay_ready">待支付</span>
          <el-button icon="el-icon-refresh" circle class="res"></el-button>
        </div>
        <div class="serch">
          <el-input v-model="value" placeholder="请输入查询单号" class="ser_order" ref="myinput"></el-input>
          <button class="btn_ser" @click="serach">搜索</button>
          <span class="dian"></span>
          <span class="allJian">{{}}</span>
        </div>
      </div>
      <div class="c_bto">
        <div class="c_con">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="序号">
            </el-table-column>
            <el-table-column prop="name" label="单号">
            </el-table-column>
            <el-table-column prop="address" label="下单时间">
            </el-table-column>
            <el-table-column prop="date" label="件数">
            </el-table-column>
            <el-table-column prop="name" label="重量(KG)">
            </el-table-column>
            <el-table-column prop="address" label="客户">
            </el-table-column>
            <el-table-column prop="date" label="销售">
            </el-table-column>
            <el-table-column prop="name" label="盘点时间">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      newArray: [],
      tableData: []
    };
  },
  methods: {
    serach() {
      console.log(this.tableData);
      var newData = this.tableData;
      var reg = new RegExp(this.$refs.myinput.value);
      console.log(reg);
      for (let i = 0; i < newData.length; i++) {
        console.log(newData[i].name);
        if (newData[i].name.match(reg)) {
          this.newArray.push(newData[i]);
        }
      }
      console.log(this.newArray);
    }
  }
};

methods: {
}
</script>
<style>
.conta {
  background: #eff5f9;
  width: 812px;
  height: 537px;
  box-sizing: border-box;
  margin-left: 15px;
  overflow: hidden;
}
.pay {
  display: flex;
  justify-content: space-between;
}
.pay_ready {
  display: inline-block;
  font-size: 9pt;
  color: #0d0d0d;
  margin-left: 20px;
  margin-top: 19pt;
}
.el-icon-refresh {
  margin-top: 19pt;
  margin-right: 14pt;
  display: inline-block;
  width: 13pt;
  height: 13pt;
  font-size: 14px;
}
.res {
  margin-top: 19pt;
  margin-right: 14pt;
  width: 30pt;
  height: 50pt;
  background: none;
  border: none;
}
.ser_order {
  width: 137pt;
  margin-left: 20px;
  height: 18pt;
  border-radius: 3pt;
  margin-top: 25pt;
}

.c_bto {
  margin-top: 20px;
}
.btn_ser {
  width: 80px;
  height: 36px;
  border-radius: 3pt;
  background: #256ad1;
  color: white;
  border: none;
  margin-left: 15px;
}
.dian {
  display: inline-block;
  width: 4pt;
  height: 4pt;
  background: #e9690b;
  margin-left: 270px;
}
.allJian {
  margin-left: 10px;
  margin-top: 5px;
}
</style>
