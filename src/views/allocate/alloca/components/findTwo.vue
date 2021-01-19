<template>
  <div>
    <div class="filter-container">
      <div class="hborder">
        <el-input v-model="listQuery.title" placeholder="航班号" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      </div>
      <div class="bianma">
        <customer class="filter-item"></customer>
      </div>
      <div class="date">
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
      fightList: []
    };
  },
  props: {},
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
  display: flex;
  align-items: center;
}
.btnserch {
  position: absolute;
  right: 50px;
  top: 55px;
}
.bianma {
  margin-left: 100px;
}
.date {
  margin-left: 100px;
}
</style>
