<template>
  <div>
    <PageContainer>
      <template v-slot:aside>

      </template>
      <template v-slot:filter>
      </template>
      <template v-slot:tool>
        <el-button size="mini" round>日志</el-button>
        <el-button size="mini" round>通过</el-button>
        <el-button size="mini" round>不通过</el-button>
        <div class="btnDiv">

          <el-button size="mini" round>搜索</el-button>
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
import Find from "./findTwo";
import NavMenu from "./NavMenu";
import WorkOrderState from "./WorkOrderState";
import { all } from "q";
import hkAbout from "@/components/IPS/Hkabout/Habout";
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
    label: "账单单号",
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
    prop: "ID",
    width: "70"
  },
  {
    label: "付款方式",
    prop: "ID",
    width: "70"
    // scoped: () => import("./components/WorkOrderState")
  },
  {
    label: "应付对象",
    prop: "ID",
    width: "70"
    // scoped: () => import("./components/WorkOrderState")
  }
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
    NavMenu,
    Find,
    hkAbout
  },
  data() {
    return {
      listQuery: {},
      shownewManag: {
        show: false
        // title: "新增"
      },
      show: {
        show: false,
        title: "生成出库单",
        didshow: false
      },
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        exchangeHk: false
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
      exchangeHk: false
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
    },
    addhk() {
      this.shownewManag.show = !this.shownewManag.show;
      console.log(this.shownewManag.show);
    }
  }
};
</script>


<style>
.model {
  margin-top: 10px;
  display: flex;
}
.order {
  margin-left: -20px;
}
.subfilg {
  margin: auto 0;
  width: 50pt;
  height: 18pt;
  text-align: center;
  line-height: 0;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
.subfilg1 {
  margin: auto 0;
  min-width: 50pt;
  height: 18pt;
  text-align: center;
  line-height: 0;
  font-size: 7pt;
}
.btnWhite {
  background: white;
  border: 1px solid #256ad1;
  min-width: 50pt;
  height: 18pt;
  line-height: 0;
  font-size: 7pt;
  color: #256ad1;
}
</style>