<template>
  <div>
    <div ref="myref" v-show="xianshi">
      <el-dialog :title="show.title" :visible.sync="show" custom-class="createOrderTwo" :modal="false" :modal-append-to-body="false">
        <div class="addAllin">
          <p class="addP">
            <span>运单号</span>
            <span>350252</span>
          </p>
          <div class="add_top">
            <div class="addson">
            </div>
          </div>
          <div class="add_bto">
            <Table multiselect key=" " :loading="loading" :data="tableData" :columns="tableColumns" @selectRow="selectRow">
            </Table>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="back">下一步</el-button>
          </span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import Table from "./table";
import { endfache } from "@/api/dispatch";
const ConstColumns = [
  {
    label: "顺序",
    prop: ""
  },
  {
    label: "交货地址",
    prop: ""
  },
  {
    label: "交货时间",
    prop: ""
  },
  {
    label: "单号",
    prop: ""
  },
  {
    label: "件数",
    prop: ""
  },
  {
    label: "重量(KG)",
    prop: ""
  },
  {
    label: "产品",
    prop: ""
  },
  {
    label: "渠道",
    prop: ""
  }
];
export default {
  components: {
    Table
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    NewValue: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      endValue: {},
      tableColumns: ConstColumns,
      selectRowData: [],
      allTable: {
        pageSize: 0,
        pageIndex: 0,
        total: 0
      },
      tableData: [],
      loading: false,
      xianshi: true,
      radio: "1",
      open: false,
      form: {
        name: ""
      },
      endObj: []
    };
  },
  methods: {
    back() {
      this.xianshi = !this.xianshi;
      this.xianshi1 = 1;
      this.$emit("xiaodou", {
        onshow: false,
        didshow: true
      });
      endfache(this.endObj).then(res => {
        console.log(res);
      });
    },
    selectRow(selectData) {
      this.selectRowData = selectData;
    }
  },
  created() {
    this.$center.$on("send-newData", chukuorderData => {
      this.endObj.push(chukuorderData);
      console.log(this.endObj);
    });

    this.$center.$on("tableData", sendNewData => {});
  }
};
</script>
<style >
.createOrderTwo {
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
</style>
