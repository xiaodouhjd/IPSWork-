<template>
  <div>
    <div class="filter-container">
      <div class="btnonew">
        <div class="orderdanw">
          <el-input placeholder="单号222" style="width: 200px;" class="filter-item orderInput" @keyup.enter.native="handleFilter" />
        </div>
        <div class="ordertw">
          <customer class="filter-item"></customer>
        </div>
        <div class="orderhw">
          <el-input placeholder="国家" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </div>
      </div>
      <div class="btntww">
        <div class="inputfow">
          <el-input placeholder="销售产品" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </div>
        <div class="timew">
          <el-date-picker class="filter-item" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <div class="btnserchw">
        <el-button v-waves class="filter-item " type="primary" icon="el-icon-search" @click="handleFilter">
          充值
        </el-button>
        <el-button v-waves class="filter-item " type="primary" icon="el-icon-search" @click="handleFilter">
          查找
        </el-button>
      </div>

    </div>
  </div>
</template>

<script>
import waves from "@/directive/waves";
import Customer from "@/components/IPS/Customer";
import { newfindOrder } from "@/api/dispatch";
export default {
  name: "Find",
  directives: { waves },
  components: {
    Customer
  },
  data() {
    return {
      listQuery: {
        WaybillNos: ""
      },
      loading: false
    };
  },
  methods: {
    onSubmit() {},
    remoteMethod() {},
    handleFilter() {
      newfindOrder(this.listQuery.WaybillNos).then(res => {
        console.log(res);
        let List = res.DataList;
        this.$center.$emit("send-data", List);
      });
    }
  }
};
</script>

<style lang="scss">
.filter-container {
  padding-top: 10px;
}
.btnonew {
  display: flex;
  justify-content: space-around;
}
.btnserchw {
  float: right;
  margin-top: -50px;
}
.ordertw {
  margin-left: -400px;
}
.orderdanw {
  margin-left: -200px;
}
.orderhw {
  margin-left: -350px;
}
.btntww {
  display: flex;
}
.inputfow {
  margin-left: 110px;
}
.timew {
  margin-left: 198px;
}
</style>
