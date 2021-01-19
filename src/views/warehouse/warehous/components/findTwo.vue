<template>
  <div>
    <div class="filter-container">
      <div class="btnoneh">
        <div class="orderdanh">
          <el-input v-model="listQuery.title" placeholder="单号" style="width: 200px;" class="filter-item orderInput" @keyup.enter.native="handleFilter" />
        </div>
        <div class="orderth">
          <customer class="filter-item"></customer>
        </div>
        <div class="orderhh">
          <el-input v-model="listQuery.title" placeholder="国家" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </div>
      </div>
      <div class="btntwh">
        <div class="inputfoh">
          <el-input placeholder="销售产品" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </div>
        <div class="timeh">
          <el-date-picker class="filter-item" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <div class="btnserchh">
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

<style lang="scss" scoped>
.filter-container {
  padding-top: 10px;
}
.btnoneh {
  display: flex;
  justify-content: space-around;
  margin-top: -20px;
}
.btnserchh {
  float: right;
  margin-top: -50px;
}
.orderth {
  margin-left: -400px;
}
.orderdanh {
  margin-left: -200px;
}
.orderhh {
  margin-left: -400px;
}
.btntwh {
  display: flex;
}
.inputfoh {
  margin-left: 115px;
}
.timeh {
  margin-left: 220px;
}
</style>
