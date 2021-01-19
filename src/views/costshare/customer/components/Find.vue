<template>
  <div>
    <div class="filter-container">
      <div class="btnonet">
        <div class="orderdant">
          <el-input v-model="listQuery.title" placeholder="单号" style="width: 200px;" class="filter-item orderInput" @keyup.enter.native="handleFilter" />
        </div>
        <div class="orderht">
          <el-input v-model="listQuery.billOrder" placeholder="提单号" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </div>
      </div>
      <div class="btnsercht">
        <el-button v-waves class="filter-item " type="primary" icon="el-icon-search" @click="handleFilter">
          查询
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import waves from "@/directive/waves";
import Customer from "@/components/IPS/Customer";
import { findCost } from "@/api/financial";
export default {
  name: "Find",
  directives: { waves },
  components: {
    Customer
  },
  data() {
    return {
      listQuery: {
        WaybillNo: "",
        billOrder: ""
      },
      loading: false
    };
  },
  methods: {
    onSubmit() {},
    remoteMethod() {},
    handleFilter() {
      findCost(this.listQuery).then(res => {
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
.btnonet {
  display: flex;
  justify-content: space-around;
}
.btnsercht {
  float: right;
  margin-top: -50px;
  margin-right: 100px;
}
.ordertt {
  margin-left: -400px;
}
.orderdant {
  margin-left: -450px;
}
.orderht {
  margin-left: -200px;
}
.btntwt {
  display: flex;
}
.inputfot {
  margin-left: 145px;
}
</style>
