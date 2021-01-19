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
        <el-button size="mini" round @click="addhk=true">添加航空信息</el-button>
        <el-dialog title="修改航空信息" :visible.sync="addhk" width="265px" :before-close="handleClose" custom-class="addH">
          <div class="model"><span class="span">航班号</span> <input type="text" class="inputAll" placeholder="CZ369852"></div>
          <div class="model"><span class="span">提单号</span> <input type="text" class="inputAll2" placeholder="--"></div>
          <div class="model"><span class="span3">预计出发时间</span> <input type="text" class="inputAll3" placeholder="--"></div>
          <div class="model"><span class="span3">预计到达时间</span> <input type="text" class="inputAll3" placeholder="--"></div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="addhk = false" class="subfilg">提交</el-button>
          </span>
        </el-dialog>
        <el-button size="mini" round @click="addexpress=true">添加包裹号</el-button>
        <el-dialog title="包裹号" :visible.sync="addexpress" width="265px" :before-close="handleClose" custom-class="addexp">
          <div class="model"><span class="span">包裹号</span> <input type="text" class="inputAll" placeholder="CZ369852"></div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="addexpress = false" class="subfilg">提交</el-button>
          </span>
        </el-dialog>
        <el-button size="mini" round @click="exchange=true">更改预报地</el-button>
        <el-dialog title="更改预报地" :visible.sync="exchange" width="265px" :before-close="handleClose" custom-class="exchange">
          <div class="model"><span class="span">预报地</span> <input type="text" class="inputAll1" placeholder="广州"><input type="text" class="inputAll1" placeholder="修改"></div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="exchange = false" class="subfilg">提交</el-button>
          </span>
        </el-dialog>
      </template>
      <template v-slot:table>
        <Table :data="tableData" :columns="tableColumns" :page="page" :limit="limit" :total="total"></Table>
      </template>
    </PageContainer>
  </div>
</template>

<script>
import PageContainer from "@/components/IPS/PageContainer";
import Find from "./components/Find";
import NavMenu from "./components/NavMenu";
import WorkOrderState from "./components/WorkOrderState";
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
    prop: "ID",
    width: "100"
  },
  {
    label: "航班号",
    prop: "ID"
  },
  {
    label: "提单号",
    prop: "ID",
    width: "70"
  },
  {
    label: "始发地",
    prop: "ID",
    width: "70"
    // scoped: () => import("./components/WorkOrderState")
  },
  {
    label: "目的地",
    prop: "ID",
    width: "70"
    // scoped: () => import("./components/WorkOrderState")
  },
  {
    label: "计划出发",
    prop: "ID",
    width: "70"
  },
  {
    label: "计划到达",
    prop: "ID",
    width: "70"
  },
  {
    label: "实际出发",
    prop: "ID",
    width: "70"
  },
  {
    label: "实际到达",
    prop: "ID",
    width: "70"
  },
  {
    label: "件数",
    prop: "ID",
    width: "70"
  },
  {
    label: "计划到达",
    prop: "ID",
    width: "70"
  },
  {
    label: "运输状态",
    prop: "ID",
    width: "70"
  }
  // {
  //   align: "center",
  //   width: "70",
  //   fixed: "right",
  //   // scoped: () => import("./components/WorkOrderHandler")
  // }
];
export default {
  name: "WorkOrder",
  components: {
    PageContainer,
    NavMenu,
    Find,
    Table
  },
  data() {
    return {
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
  }
};
</script>

<style lang="scss" >