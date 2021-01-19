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
      </template>
      <template v-slot:table>
        <Table multiselect key=" " :loading="loading" :data="allData.tableData" :columns="tableColumns" @selectRow="selectRow" :limit="allData.pageSize" :total="allData.total" @changePage="changePage">
        </Table>
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
import { ticket } from "@/api/dispatch";
import { allCangku } from "@/api/dispatch";
const navmenu = ["待办工单", "未解决工单", "已解决工单", "所有工单"];
const ConstColumns = [
  {
    label: "原单号",
    prop: "WaybillNo"
  },
  {
    label: "子单号",
    prop: "WaybillNo"
  },
  {
    label: "下单时间",
    prop: "AddTime"
  },
  {
    label: "重量(KG)",
    prop: ""
  },
  {
    label: "转单时间",
    prop: "PlaceTime"
  },

  {
    label: "转单操作状态",
    prop: "TotalVolume"
  }
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
      exchangeHk: false,
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      options: [],
      loading: false,
      page: 0,
      limit: 20,
      total: 100,
      tableColumns: ConstColumns,
      navmenu: navmenu,
      exchangeHk: false,
      allData: {
        tableData: [],
        pageSize: 0,
        pageIndex: 0,
        total: 0
      },
      allpiao: {
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
    getAllOrder() {
      allCangku().then(res => {
        console.log(res);
        this.allData.tableData = res;
      });
    },
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
        name: "workorderhandler"
      };
      this.$router.push(rote);
    },
    addhk() {
      this.shownewManag.show = !this.shownewManag.show;
      console.log(this.shownewManag.show);
    },
    selectRow(selectData) {
      this.selectRowData = selectData;
    },
    changePage(val) {
      let { limit, page } = val;
      this.allpiao.pageIndex = page;
      this.allpiao.pageSize;
      this.getAllOrder();
    }
  },
  created() {
    this.getAllOrder();
  }
};
</script>


<style>