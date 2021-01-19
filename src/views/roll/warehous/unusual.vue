<template>
  <div>
    <PageContainer>
      <template v-slot:aside>
      </template>
      <template v-slot:filter>
        <!-- <find></find> -->
      </template>
      <template v-slot:tool>
        <el-button size="mini" round>日志</el-button>
        <!-- <el-button size="mini" round @click="sign">签收</el-button> -->
        <div class="btn_right">
          <!-- <el-button size="mini" round>下载发票</el-button> -->
          <el-button size="mini" round>刷新</el-button>
        </div>
      </template>
      <template v-slot:table>
        <Table :data="tableData" :columns="tableColumns" :page="page" :limit="limit" :total="total"></Table>
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
const ConstData = () => {
  let result = [];
  for (let i = 0; i < 100; i++) {
    let s = i * 2;
    result.push({ Age: i, ID: s });
  }
  return result;
};
const ConstColumns = [
  {
    label: "状态",
    prop: "Age"
  },
  {
    label: "运单号",
    prop: "ID"
  },
  {
    label: "下单时间",
    prop: "ID"
  },
  {
    label: "件数",
    prop: "ID"
  },
  {
    label: "重量(KG)",
    prop: "ID"
  },
  {
    label: "产品",
    prop: "ID"
  },
  {
    label: "渠道",
    prop: "ID"
  },
  {
    label: "客户",
    prop: "ID"
  },
  {
    label: "电话",
    prop: "ID"
  },
  {
    label: "销售",
    prop: "ID"
  }

  // {
  //   label: "操作",
  //   prop: "ID",
  //   scoped: () => import("./components/WorkOrderHandler")
  // }
  // {
  //   align: "center",
  //   width: "70",
  //   fixed: "right",

  // }
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
        // title: "新增"
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
      tableColumns: ConstColumns
    };
  },
  computed: {
    tableData() {
      let result = [];
      let i = this.page;
      for (; i <= (this.page + 1) * this.limit; i++) {
        let s = i * 2;
        result.push({ Age: i, ID: s });
      }
      return result;
    }
  },
  methods: {
    onSubmit() {},
    remoteMethod() {},
    sign() {
      this.shownewManag.show = !this.shownewManag.show;
      console.log(this.shownewManag.show);
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
