<template>
  <div>
    <div class="filter-container">
      <div class="btnonex">
        <div class="orderdanx">
          <el-input v-model="listQuery.title" placeholder="运单号" style="width: 200px;" class="filter-item orderInput" @keyup.enter.native="handleFilter" />
        </div>
        <div class="ordertx">
          <customer class="filter-item"></customer>
        </div>
        <div class="orderhx">
          <el-input v-model="listQuery.title" placeholder="子单号" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </div>
      </div>
      <div class="btntwx">
        <div class="timex">
          <el-date-picker class="filter-item" v-model="listQuery.date" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <div class="btnserchx">
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
      listQuery: {},
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
.btnonex {
  display: flex;
  justify-content: space-around;
  margin-top: -20px;
}
.btnserchx {
  float: right;
  margin-top: -50px;
}
.ordertx {
  margin-left: -300px;
}
.orderdanx {
  margin-left: -240px;
}
.orderhx {
  margin-left: -300px;
}
.btntwx {
  display: flex;
}
.inputfox {
  margin-left: 145px;
}
.timex {
  margin-left: 80px;
}
</style>
