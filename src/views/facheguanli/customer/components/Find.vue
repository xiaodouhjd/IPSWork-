<template>
  <div>
    <div class="filter-container">
      <div class="btnonet">
        <div class="orderdant">
          <el-input v-model="listQuery.title" placeholder="单号" style="width: 200px;" class="filter-item orderInput" @keyup.enter.native="handleFilter" />
        </div>
        <div class="ordertt">
          <customer class="filter-item"></customer>
        </div>
        <div class="orderht">
          <el-input v-model="listQuery.title" placeholder="国家" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </div>
      </div>
      <div class="btntwt">
        <div class="inputfot">
          <el-input v-model="listQuery.title" placeholder="销售产品" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </div>
        <div class="timet">
          <el-date-picker class="filter-item" v-model="listQuery.date" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <div class="btnsercht">
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
import { findFacheList } from "@/api/dispatch";
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
      findData: {
        pageIndex: 1,
        pageSize: 10
      }
    };
  },
  methods: {
    onSubmit() {},
    remoteMethod() {},
    handleFilter() {
      findFacheList(this.findData).then(res => {
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
}
.ordertt {
  margin-left: -400px;
}
.orderdant {
  margin-left: -200px;
}
.orderht {
  margin-left: -400px;
}
.btntwt {
  display: flex;
}
.inputfot {
  margin-left: 145px;
}
.timet {
  margin-left: 272px;
}
</style>
