<template>
  <div>
    <PageContainer>
      <template v-slot:aside>
      </template>
      <template v-slot:filter>
        <find></find>
      </template>
      <template v-slot:tool>
        <el-button size="mini" round>日志</el-button>
        <el-button size="mini" round @click="sign">签收</el-button>
        <div class="btn_right">
          <el-button size="mini" round>下载发票</el-button>
          <!-- <el-button size="mini" round>刷新</el-button> -->
        </div>
      </template>
      <template v-slot:table>
        <Table :data="planData.tableData" :columns="tableColumns" :loading="loading" @selectRow="selectRow" :limit="planData.pageSize" :total="planData.total"></Table>
      </template>
    </PageContainer>
    <hk-About :shownewManag="shownewManag"></hk-About>
  </div>
</template>

<script>
import PageContainer from "@/components/IPS/PageContainer";
import Find from "./components/tableHead";
import WorkOrderState from "./components/WorkOrderState";
import Table from "@/components/IPS/foretable";
import hkAbout from "@/components/IPS/Hkabout/Habout";
import { orderPlan } from "@/api/dispatch";
const ConstColumns = [
  {
    label: "状态",
    prop: "GoodsStatus"
  },
  {
    label: "运单号",
    prop: "WaybillNo"
  },
  {
    label: "子单号",
    prop: "SonWaybillNo"
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
    label: "备注",
    prop: "Remarke"
  },
  {
    label: "安排日期",
    prop: "PlanDate"
  },
  {
    label: "出库日期",
    prop: "OutDate"
  },
  {
    label: "出库单",
    prop: "TaskId"
  },
  {
    label: "出库状态",
    prop: "TaskStatus"
  }
];
export default {
  name: "dispatch",
  components: {
    PageContainer,
    Find,
    Table,
    hkAbout
  },
  data() {
    return {
      shownewManag: {
        show: false,
        title: "新增"
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
      planData: {
        tableData: [],
        pageSize: 0,
        pageIndex: 0,
        total: 1
      }
    };
  },
  methods: {
    onSubmit() {},
    remoteMethod() {},
    sign() {
      this.shownewManag.show = !this.shownewManag.show;
    },
    getPlan() {
      orderPlan().then(res => {
        console.log(res.DataList);
        this.planData.tableData = res.DataList;
      });
    },
    changePage(val) {
      let { limit, page } = val;
      this.planData.pageIndex = page;
      this.planData.page;
      this.getPlan();
    },
    selectRow(selectData) {
      this.selectRowData = selectData;
    }
  },
  created() {
    this.getPlan();
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
