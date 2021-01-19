<template>
  <div>
    <PageContainer>
      <template v-slot:filter>
        <div class="filter-container">
          <el-input v-model="visitG.WaybillNo" placeholder="单号" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
          <el-date-picker class="filter-item" v-model="visitG" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
            查找
          </el-button>
        </div>
      </template>
      <template v-slot:tool>
        <el-button size="mini" round>日志</el-button>
        <div class="btn_right">
        </div>
      </template>
      <template v-slot:table>
        <Table :data="visitData.tableData" :columns="tableColumns" :loading="loading" @selectRow="selectRow" :limit="visitData.pageSize" :total="visitData.total" :page="visitData.pageIndex"></Table>
      </template>
    </PageContainer>
    <hk-About :shownewManag="shownewManag"></hk-About>
  </div>
</template>

<script>
import PageContainer from "@/components/IPS/PageContainer";
import WorkOrderState from "./components/WorkOrderState";
import Table from "@/components/IPS/Table";
import hkAbout from "@/components/IPS/Hkabout/Habout";
import { getPickUpGoods, abc, driver, visit } from "@/api/pickupGoods";
const ConstColumns = [
  {
    label: "状态",
    prop: "Status"
  },
  {
    label: "单号",
    prop: "WaybillNo"
  },
  {
    label: "下单时间",
    prop: "AddTime"
  },
  {
    label: "件数",
    prop: "Piece"
  },
  {
    label: "重量(KG)",
    prop: "Weight"
  },
  {
    label: "销售",
    prop: "ID"
  },
  {
    label: "客户",
    prop: "Sender"
  },
  {
    label: "省",
    prop: "province"
  },
  {
    label: "市",
    prop: "city"
  },
  {
    label: "区",
    prop: "ID"
  },
  {
    label: "街道",
    prop: "region"
  },
  {
    label: "提货时间",
    prop: "ToTime"
  }
];
export default {
  name: "dispatch",
  components: {
    PageContainer,
    Table,
    hkAbout
  },
  data() {
    return {
      shownewManag: {
        show: false
      },
      visitG: {
        WaybillNo: null,
        AddTime: [],
        pageIndex: 1,
        pageSize: 20
      },
      title: "",
      formInline: {},
      value: "",
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      options: [],
      loading: false,
      page: 0,
      limit: 20,
      total: 100,
      tableColumns: ConstColumns,
      visitData: {
        tableData: [],
        pageSize: 0,
        pageIndex: 0,
        total: 0
      },
      newVisit: {
        pageSize: 1,
        pageIndex: 20,
        WaybillNo: ""
      }
    };
  },
  methods: {
    visitGoods() {
      visit().then(res => {
        console.log(res.DataList);
        this.visitData.tableData = res.DataList;
        let visitNum = this.visitData.tableData.length;
        this.visitData.total = visitNum;
        console.log(this.visitData.total);
      });
    },
    onSubmit() {},
    remoteMethod() {},
    sign() {
      this.shownewManag.show = !this.shownewManag.show;
      console.log(this.shownewManag.show);
    },
    handleFilter() {},
    changePage(val) {
      let { limit, page } = val;
      this.newVisit.pageIndex = page;
      this.newVisit.page;
      this.visitGoods();
    },
    selectRow(selectData) {
      this.selectRowData = selectData;
    }
  },
  mounted() {},
  created() {
    this.visitGoods();
  }
};
</script>

<style lang="scss" >
.container {
  min-height: calc(100vh - 84px);
}
.btn_right {
  float: right;
}
</style>
