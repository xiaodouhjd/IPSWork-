<template>
  <div>
    <div class="filter-container">
      <div class="btnoner">
        <div class="orderdanr">
          <el-input v-model="listQuery.serch" placeholder="单号" style="width: 200px;" class="filter-item orderInput" @keyup.enter.native="handleFilter" ref="myref" />
        </div>

        <div class="timer">
          <el-date-picker class="filter-item" v-model="listQuery.date" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <div class="btnserchr">
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
        serch: ""
      },
      loading: false
    };
  },
  methods: {
    onSubmit() {},
    remoteMethod() {},
    handleFilter() {
      let value = this.$refs.myref.value;
      console.log(value);
      this.$center.$emit("send-data", value);
    }
  }
};
</script>

<style lang="scss">
.filter-container {
  padding-top: 10px;
}
.btnoner {
  display: flex;
  justify-content: space-around;
}
.btnserchr {
  float: right;
  margin-top: -50px;
}
.ordertr {
  margin-left: -400px;
}
.orderdanr {
  margin-left: -500px;
}

.timer {
  margin-left: -572px;
}
</style>
