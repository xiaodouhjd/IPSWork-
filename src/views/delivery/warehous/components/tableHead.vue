<template>
  <div>
    <div class="filter-container">
      <div class="btnoned">
        <div class="orderdand">
          <el-input v-model="listQuery.WaybillNo" placeholder="单号" style="width: 200px;" class="filter-item orderInput" @keyup.enter.native="handleFilter" />
        </div>
        <div class="ordertd">
          <customer class="filter-item"></customer>
        </div>
        <div class="orderhd">
          <el-input v-model="listQuery.country" placeholder="国家" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </div>
      </div>
      <div class="btntwd">
        <div class="inputfod">
          <el-input v-model="listQuery.GoodsType" placeholder="销售产品" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </div>
        <div class="timed">
          <el-date-picker class="filter-item" v-model="listQuery.date" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <div class="btnserchd">
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
import { findchukuOrder } from "@/api/dispatch";
export default {
  name: "Find",
  directives: { waves },
  components: {
    Customer
  },
  data() {
    return {
      listQuery: {
        WaybillNo: 300998947,
        CustomerLevel: "",
        GoodsType: "",
        country: "",
        pageSize: 20,
        pageIndex: 1
      },
      loading: false
    };
  },
  methods: {
    onSubmit() {},
    remoteMethod() {},
    handleFilter() {
      findchukuOrder(this.listQuery).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss">
.filter-container {
  padding-top: 10px;
}
.btnoned {
  display: flex;
  justify-content: space-around;
}
.btnserchd {
  float: right;
  margin-top: -50px;
}
.ordertd {
  margin-left: -400px;
}
.orderdand {
  margin-left: -200px;
}
.orderhd {
  margin-left: -350px;
}
.btntwd {
  display: flex;
}
.inputfod {
  margin-left: 135px;
}
.timed {
  margin-left: 255px;
}
</style>
