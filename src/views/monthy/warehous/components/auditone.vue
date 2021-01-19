<template>
  <div>
    <PageContainer>
      <template v-slot:aside>
      </template>
      <template v-slot:filter>
      </template>
      <template v-slot:tool>
        <el-input v-model="listQuery.title" placeholder="客户" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
        <el-button size="mini" round class="chaxun">查询</el-button>
        <el-button size="mini" round class="rizhi">日志</el-button>
        <div class="header_center">
          <span>显示：</span>
          <button class="allIN">全部</button>
          <span>未付款</span>
          <span>未结清</span>
          <span>待审核</span>
          <span>月份显示:</span>
          <el-date-picker v-model="value2" type="month" placeholder="选择月" prefix-icon="el-icon-time">
          </el-date-picker>
        </div>
        <div class="btnDiv">
          <el-button size="mini" round @click="exportData">导出资料</el-button>
        </div>
      </template>
      <template v-slot:table>
        <Table :data="monthyData.tableData" :columns="tableColumns" :loading="loading" multiselect key="" :page="monthyData.pageIndex" :limit="monthyData.pageSize" :total="monthyData.total" @changePage="changePage" @selectRow="selectRow"></Table>
      </template>
    </PageContainer>
  </div>
</template>
<script>
import NavMenu from "./NavMenu";
import WorkOrderState from "./WorkOrderState";
import { all } from "q";
import { CustomerArray } from "@/api/common";
import { monthList } from "@/api/financial";
const navmenu = ["待办工单", "未解决工单", "已解决工单", "所有工单"];
const ConstColumns = [
  {
    label: "状态",
    prop: ""
  },
  {
    label: "公司名称",
    prop: ""
  },
  {
    label: "付款方式",
    prop: ""
  },
  {
    label: "剩余额度/月度总额",
    prop: ""
  },
  {
    label: "剩余账期/总账期",
    prop: ""
  },
  {
    label: "已结账单/剩余待收/月度账单",
    prop: ""
  },
  {
    label: "操作",
    prop: ""
  }
];
export default {
  name: "cancelsalesapply",
  components: {
    NavMenu
  },
  data() {
    return {
      value2: "",
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
      exchange: false,
      monthyData: {
        tableData: [],
        pageIndex: 0,
        pageSize: 0,
        total: 0
      },
      sendMonthData: {
        pageIndex: 1,
        pageSize: 20
      }
    };
  },
  provide() {
    return {
      hander: this.hander
    };
  },
  methods: {
    exportData() {
      alert("导出资料");
    },
    getCustomerList() {
      monthList().then(res => {
        console.log(res);
        this.monthyData.tableData = res;
        let monthNum = this.monthyData.tableData.length;
        this.monthyData.total = monthNum;
      });
    },
    getMonthDataList() {},
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
    hander() {
      const rote = {
        name: "month"
      };
      this.$router.push(rote);
    },
    changePage(val) {
      console.log(val);
      let { limit, page } = val;
      this.sendMonthData.pageIndex = page;
      this.sendMonthData.pageSize = limit;
      this.getMonthDataList();
    },
    selectRow(selectData) {
      this.selectRowData = selectData;
    }
  },
  created() {
    this.getMonthDataList();
    this.getCustomerList();
  }
};
</script>
<style>
.btnDiv {
  float: right;
  margin-top: -25px;
}
.proinput {
  position: absolute;
  top: 20px;
}
.rizhi {
  margin-top: 20px;
}
.chaxun {
  position: absolute;
  top: 23px;
  left: 400px;
}
.header_center {
  margin-left: 550px;
}
.allIN {
  width: 50px;
  height: 16px;
  background: #e8f3ff;
  color: #256ad1;
  border: none;
  font-size: 12px;
}
.el-input--prefix .el-input__inner {
  padding-left: 30px;
  border: none;
  margin-top: -10px;
  margin-left: 10px;
}
.el-icon-time {
  margin-top: -9px;
}
.inputClinet {
  width: 100pt;
  height: 20pt;
  border-radius: 3pt;
  border: 1px solid #707070;
  margin-left: 20px;
}
.btnCli {
  width: 60pt;
  height: 20pt;
  background: #256ad1;
  border-radius: 3pt;
  color: white;
  border: none;
  margin-left: 20px;
}
.day {
  position: absolute;
  left: 20px;
}
</style>