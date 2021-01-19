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
        <el-button size="mini" round>通过</el-button>
        <el-button size="mini" round>不通过</el-button>
        <div class="btnDiv">
          <el-input v-model="listQuery.title" placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
          <el-button size="mini" round>搜索</el-button>
          <el-button size="mini" round>刷新</el-button>
        </div>
      </template>
      <template v-slot:table>
        <Table :data="tableData" :columns="tableColumns" :page="page" :limit="limit" :total="total"></Table>
      </template>
    </PageContainer>
  </div>
</template>

<script>
import PageContainer from "@/components/IPS/PageContainer";
import Find from "./Find";
import NavMenu from "./NavMenu";
import WorkOrderState from "./WorkOrderState";
import Table from "@/components/IPS/Table";
import { all } from "q";
const navmenu = ["待办工单", "未解决工单", "已解决工单", "所有工单"];
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
    label: "账单账号",
    prop: "ID"
  },
  {
    label: "账单时间",
    prop: "ID"
  },
  {
    label: "金额",
    prop: "ID",
    width: "70"
  },
  {
    label: "费用类型",
    prop: "ID",
    width: "100"
  },
  {
    label: "备注",
    prop: "ID"
  },
  {
    label: "盖章单据",
    prop: "ID"
  },
  {
    label: "付款方式",
    prop: "ID"
  },
  {
    label: "应付对象",
    prop: "ID"
  }

  // {
  //   label: "提单号",
  //   prop: "ID",
  //   width: "70"
  // },
  // {
  //   label: "始发地",
  //   prop: "ID",
  //   width: "70"
  //   // scoped: () => import("./components/WorkOrderState")
  // },
  // {
  //   label: "目的地",
  //   prop: "ID",
  //   width: "70"
  //   // scoped: () => import("./components/WorkOrderState")
  // },
  // {
  //   label: "计划出发",
  //   prop: "ID",
  //   width: "70"
  // },
  // {
  //   label: "计划到达",
  //   prop: "ID",
  //   width: "70"
  // },
  // {
  //   label: "实际出发",
  //   prop: "ID",
  //   width: "70"
  // },
  // {
  //   label: "实际到达",
  //   prop: "ID",
  //   width: "70"
  // },
  // {
  //   label: "件数",
  //   prop: "ID",
  //   width: "70"
  // },
  // {
  //   label: "计划到达",
  //   prop: "ID",
  //   width: "70"
  // },
  // {
  //   label: "运输状态",
  //   prop: "ID",
  //   width: "70"
  // }
  // {
  //   align: "center",
  //   width: "70",
  //   fixed: "right",
  //   // scoped: () => import("./components/WorkOrderHandler")
  // }
];
export default {
  name: "cancelsalesapply",
  components: {
    PageContainer,
    NavMenu,
    Find,
    Table
  },
  data() {
    return {
      listQuery: {},
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        delivery: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
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
      navmenu: navmenu,
      addhk: false,
      addexpress: false,
      exchange: false
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
  provide() {
    return {
      hander: this.hander
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  onSubmit() {},
  remoteMethod() {},
  handleClose(done) {
    this.$confirm("确认关闭？")
      .then(_ => {
        done();
      })
      .catch(_ => {});
  },
  hander() {
    const rote = {
      name: "workorderhandler"
    };
    this.$router.push(rote);
  }
};
</script>
<style>
.btnDiv {
  float: right;
}
</style>