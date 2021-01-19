<template>
  <div>
    <div class="filter-container">

      <div class="orderdan">
        <el-input v-model="listQuery.WaybillNo" placeholder="单号" style="width: 200px;" class="filter-item orderInput" />
        <customer class="filter-item"></customer>
        <el-input v-model="listQuery.country" placeholder="国家" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-input v-model="listQuery.GoodsType" placeholder="销售产品" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-date-picker class="filter-item" v-model="listQuery.date" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="btnserch">
        <el-button v-waves class="filter-item " type="primary" icon="el-icon-search" @click="handleFilter">
          重置
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
import { constants } from "crypto";
import { inforecast, findOrder } from "@/api/dispatch";
export default {
  name: "Find",
  directives: { waves },
  components: {
    Customer
  },
  data() {
    return {
      listQuery: {
        WaybillNo: null,
        CustomerLevel: "",
        GoodsType: "",
        country: "",
        pageSize: 20,
        pageIndex: 1
      },
      loading: false,
      value: "",
      order: ""
    };
  },
  methods: {
    onSubmit() {},
    remoteMethod() {},
    handleFilter() {
      findOrder(this.listQuery).then(res => {
        console.log(res.DataList);
        let newList = res.DataList;
        this.$center.$emit("send-data", newList);
      });
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.filter-container {
  padding-top: 10px;
}
.btnone {
  display: flex;
  justify-content: space-around;
}
.btnserch {
  float: right;
  margin-top: -50px;
}
.btntw {
  display: flex;
  // justify-content: space-around;
}
.inputfo {
  margin-left: 180px;
}
.time {
  margin-left: 355px;
}
</style>
