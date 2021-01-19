<template>
  <div>
    <div class="filter-container">
      <div class="btnonewq">
        <div class="orderdanwq">
          <el-input placeholder="单号" style="width: 200px;" class="filter-item orderInput" @keyup.enter.native="handleFilter" />
        </div>
        <div class="ordertwq">
          <customer class="filter-item"></customer>
        </div>
        <div class="orderhwq">
          <el-input placeholder="国家" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </div>
      </div>
      <div class="btntwwq">
        <div class="inputfowq">
          <el-input placeholder="销售产品" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </div>
        <div class="timewq">
          <el-date-picker class="filter-item" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <div class="btnserchwq">
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
export default {
  name: "Find",
  directives: { waves },
  components: {
    Customer
  },
  data() {
    return {
      listQuery: {
        title: ""
      },
      loading: false
    };
  },
  methods: {
    onSubmit() {},
    remoteMethod() {},
    handleFilter() {}
  }
};
</script>

<style lang="scss">
.filter-container {
  padding-top: 10px;
}
.btnonewq {
  display: flex;
  justify-content: space-around;
}

.ordertwq {
  margin-left: -400px;
}
.orderdanwq {
  margin-left: -200px;
}
.orderhwq {
  margin-left: -350px;
}
.btntwwq {
  display: flex;
}
.inputfowq {
  margin-left: 135px;
}
.btnserchwq {
  float: right;
  margin-top: -50px;
}
.timewq {
  margin-left: 255px;
}
</style>
