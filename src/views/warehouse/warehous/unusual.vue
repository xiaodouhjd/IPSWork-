<template>
  <div>
    <PageContainer>
      <template v-slot:aside>
      </template>
      <template v-slot:filter>
      </template>
      <template v-slot:tool>
        <el-button size="mini" round>日志</el-button>
        <div class="btn_right">
          <el-button size="mini" round>刷新</el-button>
        </div>
      </template>
      <template v-slot:table>
        <Table :data="usuData.tableData" :columns="tableColumns" @selectRow="selectRow" :limit="usuData.pageSize" :total="usuData.total" :loading="loading"></Table>
      </template>
    </PageContainer>
    <hk-About :shownewManag="shownewManag"></hk-About>
  </div>
</template>

<script>
import PageContainer from "@/components/IPS/PageContainer";
import Find from "./components/tableHead";
import WorkOrderState from "./components/WorkOrderState";
import Table from "@/components/IPS/Table";
import hkAbout from "@/components/IPS/Hkabout/Habout";
import { wade } from "@/api/dispatch";
const ConstColumns = [
  {
    label: "状态",
    prop: "AreaStatus"
  },
  {
    label: "运单号",
    prop: "WaybillNo"
  },
  {
    label: "下单时间",
    prop: "UpdateTime"
  },
  {
    label: "件数",
    prop: "GoodsPiece"
  },
  {
    label: "重量(KG)",
    prop: "TotalWeight"
  },
  {
    label: "产品",
    prop: "ServerProduct"
  },
  {
    label: "渠道",
    prop: "ChanelProvider"
  },
  {
    label: "客户",
    prop: "CustomerName"
  },
  {
    label: "电话",
    prop: "ID"
  },
  {
    label: "销售",
    prop: "CustomerCode"
  }
];
export default {
  name: "dispatch",
  components: {
    PageContainer,
    // NavMenu,
    Find,
    Table,
    hkAbout
  },
  data() {
    return {
      shownewManag: {
        show: false
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
      usuData: {
        tableData: [],
        pageSize: 0,
        pageIndex: 0,
        total: 0
      }
    };
  },
  methods: {
    onSubmit() {},
    remoteMethod() {},
    sign() {
      this.shownewManag.show = !this.shownewManag.show;
      console.log(this.shownewManag.show);
    },
    getunsual() {
      wade().then(res => {
        console.log(res.DataList);
        this.usuData.tableData = res.DataList;
        let unsuNum = this.usuData.tableData.length;
        this.usuData.total = unsuNum;
      });
    },
    selectRow(selectData) {
      this.selectRowData = selectData;
    },
    changePage(val) {
      let { limit, page } = val;
      this.planData.pageIndex = page;
      this.planData.page;
      this.getunsual();
    }
  },
  mounted() {
    this.getunsual();
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
