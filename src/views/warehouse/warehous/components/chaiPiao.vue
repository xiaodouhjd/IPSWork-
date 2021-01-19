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
        <div class="btnDiv">
          <el-button size="mini" round>下载发票</el-button>
          <el-button size="mini" round>打印发票</el-button>
        </div>
      </template>
      <template v-slot:table>
        <Table :data="chaiPiaoData.tableData" :columns="tableColumns" :loading="loading" @selectRow="selectRow" :limit="chaiPiaoData.pageSize" :total="chaiPiaoData.total" @changePage="changePage"></Table>
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
import {} from "@/api/dispatch";
const navmenu = ["待办工单", "未解决工单", "已解决工单", "所有工单"];
import { ticket } from "@/api/dispatch";
const ConstColumns = [
  {
    label: "状态",
    prop: ""
  },
  {
    label: "原单号",
    prop: "WaybillNo"
  },
  {
    label: "下单时间",
    prop: "AddTime"
  },
  {
    label: "转单号",
    prop: "newNo"
  },
  {
    label: "转单时间",
    prop: "PlaceTime"
  },
  {
    label: "上传",
    prop: "IsCancel"
  },
  {
    label: "转单操作状态",
    prop: "GoodsPiece"
  }
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
      exchange: false,
      chaiPiaoData: {
        tableData: [],
        pageSize: 0,
        pageIndex: 0,
        total: 0
      }
    };
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
    getTicket() {
      ticket().then(res => {
        console.log(res.DataList);
        this.chaiPiaoData.tableData = res.DataList;
        let chaiNum = this.chaiPiaoData.tableData.length;
        this.chaiPiaoData.total = chaiNum;
      });
    },
    selectRow(selectData) {
      this.selectRowData = selectData;
    },
    changePage(val) {
      let { limit, page } = val;
      this.chaiPiaoData.pageIndex = page;
      this.chaiPiaoData.page;
      this.getTicket();
    }
  },
  created() {
    this.getTicket();
    this.$center.$on("send-data", List => {
      this.chaiPiaoData.tableData = List;
    });
  },
  onSubmit() {},
  remoteMethod() {},
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