<template>
  <div>
    <div class="filter-container">
      <div>
        <span class="order">单号：</span>
        <el-input v-model="listQuery.title" placeholder="工单编号" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      </div>
      <div>
        <span>客户编码/名称：</span>
        <customer class="filter-item"></customer>
      </div>
      <div class="qudao">
        <span class="order">国家：</span>
        <el-input v-model="listQuery.title" placeholder="工单编号" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      </div>
      <div>
        <span>销售产品：</span>
        <el-input v-model="listQuery.title" placeholder="工单编号" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      </div>
      <div>
        <span>时间区间：</span>
        <el-date-picker class="filter-item" v-model="listQuery.date" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="btnserch">
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  div {
    margin-left: 70px;
  }
}
.btnserch {
  position: absolute;
  right: 50px;
  top: 55px;
}
.qudao {
  margin-left: 100px !important;
}
</style>
