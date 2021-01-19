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
        <el-button size="mini" round @click="grr=true">新增</el-button>
        <el-dialog title="新增" :visible.sync="grr" custom-class="addSome">
          <p class="addP">
            <span>运单号</span>
            <span>350252</span>
          </p>
          <div class="add_top">
            <div class="addson">
              <span>单号：</span>
              <el-input v-model="input" placeholder="请输入内容" class="asd"></el-input>
            </div>
            <div class="addson">
              <span>客户等级：</span>
              <el-input v-model="input" placeholder="请输入内容" class="asd"></el-input>
            </div>
            <div class="addson">
              <span>销售产品：</span>
              <el-input v-model="input" placeholder="请输入内容" class="asd"></el-input>
            </div>
            <div class="addson">
              <span>渠道：</span>
              <el-input v-model="input" placeholder="请输入内容" class="asd"></el-input>
            </div>
            <div class="addson">
              <span>状态：</span>
              <el-input v-model="input" placeholder="请输入内容" class="asd"></el-input>
            </div>
            <div class="addson">
              <span>转单时间：</span>
              <el-input v-model="input" placeholder="请输入内容" class="asd"></el-input>
            </div>
            <button class="addcheck">查询</button>
          </div>
          <div class="add_bto">
            <el-table :data="tableDataone" style="width: 100%" class="heig">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column prop="date" label="状态">
              </el-table-column>
              <el-table-column prop="name" label="客户等级">
              </el-table-column>
              <el-table-column prop="address" label="单号">
              </el-table-column>
              <el-table-column prop="address" label="件数">
              </el-table-column>
              <el-table-column prop="address" label="重量（KG）">
              </el-table-column>
              <el-table-column prop="address" label="产品">
              </el-table-column>
              <el-table-column prop="address" label="渠道">
              </el-table-column>
              <el-table-column prop="address" label="备注">
              </el-table-column>
            </el-table>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="grr = false">增加</el-button>
          </span>
        </el-dialog>
        <el-button size="mini" round @click="jianshao=true">减少</el-button>
        <el-dialog title="新增" :visible.sync="jianshao" custom-class="addSome">
          <p class="addP">
            <span>运单号</span>
            <span>350252</span>
          </p>
          <div class="add_top">
            <div class="addson">
              <span>单号：</span>
              <el-input v-model="input" placeholder="请输入内容" class="asd"></el-input>
            </div>
          </div>
          <div class="add_bto">
            <el-table :data="tableDataTwo" style="width: 100%" class="abbc">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column prop="date" label="状态">
              </el-table-column>
              <el-table-column prop="name" label="客户等级">
              </el-table-column>
              <el-table-column prop="address" label="单号">
              </el-table-column>
              <el-table-column prop="address" label="件数">
              </el-table-column>
              <el-table-column prop="address" label="重量（KG）">
              </el-table-column>
              <el-table-column prop="address" label="产品">
              </el-table-column>
              <el-table-column prop="address" label="渠道">
              </el-table-column>
              <el-table-column prop="address" label="备注">
              </el-table-column>
            </el-table>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="jianshao = false">增加</el-button>
          </span>
        </el-dialog>
        <el-button size="mini" round>作废</el-button>
        <div class="btn_right">
          <el-button size="mini" round @click="showOrder">生成发车单</el-button>
        </div>
      </template>
      <template v-slot:table>
        <Table multiselect key=" " :loading="loading" :data="chukuData.tableData" :columns="tableColumns" @selectRow="selectRow" :limit="chukuData.pageSize" :total="chukuData.total" @changePage="changePage">
        </Table>
      </template>
    </PageContainer>
    <show-Orders :show="show.show" v-on:xiaodou='show123' :OutTaskIds="OutTaskIds"></show-Orders>
    <showone :show="show.didshow" v-on:xiaodou='show123'></showone>
  </div>
</template>
<script>
import PageContainer from "@/components/IPS/PageContainer";
import Find from "./components/chukuFind";
import WorkOrderState from "./components/WorkOrderState";
import Table from "@/components/IPS/Table";
import showOrders from "@/components/IPS/chukudan/showOrderTwo";
import showone from "@/components/IPS/chukudan/showoneTwo";
import { facheOrder } from "@/api/dispatch";
const ConstColumns = [
  {
    label: "状态",
    prop: "TaskStatus"
  },
  {
    label: "出库单号",
    prop: "OutTaskId"
  },
  {
    label: "件数",
    prop: "TotalPiece"
  },
  {
    label: "重量(KG)",
    prop: "TotalWeight"
  },
  {
    label: "渠道",
    prop: "TargetBranchName"
  },
  {
    label: "供应商",
    prop: "ServerName"
  },
  {
    label: "交货地",
    prop: "ToAddress"
  },
  {
    label: "交货时间",
    prop: "TaskEndTime"
  }
];
export default {
  name: "dispatch",
  components: {
    PageContainer,
    Find,
    Table,
    showOrders,
    showone
  },
  data() {
    return {
      tableDataone: [],
      tableDataTwo: [],
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
      tableColumns: ConstColumns,
      grr: false,
      jianshao: false,
      chukuData: {
        pageSize: 0,
        pageIndex: 0,
        total: 0,
        tableData: []
      },
      axData: {
        pageSize: 20,
        pageIndex: 1
      },
      input: "",
      selectRowData: []
    };
  },
  computed: {
    OutTaskIds() {
      return [...new Set([...this.selectRowData].map(x => x.OutTaskId))];
    },
    TotalWeights() {
      return [...new Set([...this.selectRowData].map(x => x.TotalWeight))];
    }
  },
  methods: {
    chukuOrder() {
      facheOrder().then(res => {
        this.chukuData.tableData = res.DataList;
        let sendNewData = this.chukuData.tableData;
        console.log(sendNewData);
        this.$center.$emit("tableData", sendNewData);
        console.log(this.chukuData.tableData.length);
        let newNum = this.chukuData.tableData.length;
        this.chukuData.total = newNum;
      });
    },
    selectRow(selectData) {
      this.selectRowData = selectData;
    },
    show123(data) {
      this.show.show = data.onshow;
      this.show.didshow = data.didshow;
      console.log(this.show);
    },
    onSubmit() {},
    remoteMethod() {},
    showOrder() {
      this.show.show = !this.show.show;
      console.log(this.show.show);
    },
    changePage(val) {
      console.log(val);
      let { limit, page } = val;
      this.axData.pageIndex = page;
      this.axData.page;
      this.chukuOrder();
    }
  },
  created() {
    this.chukuOrder();
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
.addSome {
  width: 1150px;
  height: 736px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-radius: 10px;
  margin-top: -50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -520px);
}
.asd {
  width: 200px;
  height: 40px;
  border: 1px solid rgba(112, 112, 112, 1);
  opacity: 1;
  border-radius: 5px;
}
.add_top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -70px;
}
.addson {
  margin: 10px 10px;
  flex: 0 0 27.5%;
}
.addP {
  margin-left: -970px;
}
.addcheck {
  width: 88px;
  height: 40px;
  background: rgba(37, 106, 209, 1);
  opacity: 1;
  border-radius: 5px;
  color: white;
  border: none;
  margin-top: -125px;
  margin-left: 20px;
}
.add_bto {
  width: 1089px;
  height: 370px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  border: 1px solid #707070;
  margin-left: 30px;
  margin-top: 40px;
}
.heig {
  height: 370px;
  border-bottom: 1px solid #707070;
}
.abbc {
  height: 370px;
  border-bottom: 1px solid #707070;
}
</style>
