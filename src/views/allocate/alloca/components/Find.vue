<template>
  <div>
    <div class="filter-container">
      <div>
        <el-input v-model="listQuery.title" placeholder="单号" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      </div>
      <div class="bianma1">
        <customer class="filter-item"></customer>
      </div>
      <div class="date2">
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
      loading: false,
      datalist: []
    };
  },
  methods: {
    onSubmit() {},
    remoteMethod() {},
    handleFilter() {
      // var that = this;
    }
  },
  mounted() {
    this.handleFilter();
  }
};
</script>

<style lang="scss" scoped>
.filter-container {
  padding-top: 10px;
  display: flex;
  align-items: center;
}
.btnserch {
  margin-left: 200px;
}
.bianma1 {
  margin-left: 100px;
}
.date2 {
  margin-left: 100px;
}
</style>
