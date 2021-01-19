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
        <el-button size="mini" round @click="addhk">航空轨迹</el-button>
        <el-button size="mini" round @click="exchangeHk=true">修改航班信息</el-button>
        <el-dialog title="修改航空信息" :visible.sync="exchangeHk" width="204pt" :before-close="handleClose" custom-class="abc">
          <div class="model"><span class="span">航班号</span> <input type="text" class="inputAll" placeholder="CZ369852"></div>
          <div class="model"><span class="span">提单号</span> <input type="text" class="inputAll2" placeholder="--"></div>
          <div class="model"><span class="span3">预计出发时间</span> <input type="text" class="inputAll3" placeholder="--"></div>
          <div class="model"><span class="span3">预计到达时间</span> <input type="text" class="inputAll3" placeholder="--"></div>
          <div class="model"><span class="span3">实际出发时间</span> <input type="text" class="inputAll3" placeholder="--"></div>
          <div class="model"><span class="span3">实际到达时间</span> <input type="text" class="inputAll3" placeholder="--"></div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="exchangeHk = false" class="subfilg">提交</el-button>
          </span>
        </el-dialog>
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
import Find from "./findTwo";
import NavMenu from "./NavMenu";
import WorkOrderState from "./WorkOrderState";
import Table from "@/components/IPS/Table";
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
    label: "运单号",
    prop: "ID"
  },
  {
    label: "子单号",
    prop: "ID"
  },
  {
    label: "包裹号",
    prop: "ID",
    width: "70"
  },
  {
    label: "发车单",
    prop: "ID"
  },
  {
    label: "航班号",
    prop: "ID"
  },
  {
    label: "提单号",
    prop: "ID"
  },
  {
    label: "始发地",
    prop: "ID"
    // scoped: () => import("./components/WorkOrderState")
  },
  {
    label: "目的地",
    prop: "ID"
    // scoped: () => import("./components/WorkOrderState")
  },
  {
    label: "计划出发",
    prop: "ID"
  },
  {
    label: "计划到达",
    prop: "ID"
  },
  {
    label: "实际出发",
    prop: "ID"
  },
  {
    label: "实际到达",
    prop: "ID"
  },
  {
    label: "件数",
    prop: "ID"
  },
  {
    label: "计划到达",
    prop: "ID"
  },
  {
    label: "运输状态",
    prop: "ID"
  }
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
    Table,
    hkAbout
  },
  data() {
    return {
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