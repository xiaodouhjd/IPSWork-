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
          <el-button size="mini" round @click="showOrder">生成出库单</el-button>
        </div>
      </template>
      <template v-slot:table>
        <Table multiselect key=" " :loading="loading" :data="allTable.tableData" :columns="tableColumns" @selectRow="selectRow" :limit="allTable.pageSize" :total="allTable.total" @changePage="changePage">
        </Table>
      </template>
    </PageContainer>
    <hk-About :shownewManag="shownewManag"></hk-About>
    <show-Orders :show="show.show" v-on:cp3='show123' :WaybillNos="WaybillNos"></show-Orders>
    <showone :show="show.didshow" v-on:cp3='show123'></showone>
  </div>
</template>
<script>
import WorkOrderState from "./components/WorkOrderState";
import hkAbout from "@/components/IPS/Hkabout/Habout";
import showOrders from "@/components/stock/showOrder";
import showone from "@/components/stock/showOne";
import { chukuPlan } from "@/api/dispatch";
const ConstColumns = [
  {
    label: "状态",
    prop: "AreaStatus"
  },
  {
    label: "客户等级",
    prop: "CustomerLevel"
  },
  {
    label: "单号",
    prop: "WaybillNo"
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
    label: "渠道",
    prop: "ChanelProvider"
  },
  {
    label: "产品",
    prop: "ServerProduct"
  },
  {
    label: "备注",
    prop: "ID"
  }
];
export default {
  name: "dispatch",
  components: {
    hkAbout,
    showOrders,
    showone
  },
  data() {
    return {
      allTable: {
        tableData: [],
        pageSize: 0,
        pageIndex: 0,
        total: 0
      },
      shownewManag: {
        show: false
      },
      show: {
        show: false,
        title: "生成出库单",
        didshow: false
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
      selectRowData: []
    };
  },
  computed: {
    WaybillNos() {
      return [...new Set([...this.selectRowData].map(x => x.WaybillNo))];
    }
  },
  mounted() {
    this.getCk();
  },
  methods: {
    getCk() {
      chukuPlan().then(res => {
        console.log(res);
        this.allTable.tableData = res;
        console.log(this.allTable.tableData.length);
        let chukuNum = this.allTable.tableData.length;
        this.allTable.total = chukuNum;
      });
    },
    show123(data) {
      this.show.show = data.onshow;
      this.show.didshow = data.didshow;
      console.log(this.show);
    },
    onSubmit() {},
    remoteMethod() {},
    sign() {
      this.shownewManag.show = !this.shownewManag.show;
      console.log(this.shownewManag.show);
    },
    selectRow(selectData) {
      this.selectRowData = selectData;
    },
    showOrder() {
      this.show.show = !this.show.show;
    },
    changePage(val) {
      let { limit, page } = val;
      this.allTable.pageIndex = page;
      this.allTable.page;
      this.chukuPlan();
    }
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
