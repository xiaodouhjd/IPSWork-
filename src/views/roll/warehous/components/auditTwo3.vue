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
        <el-button size="mini" round @click="payoff = true">支付</el-button>
        <el-dialog title="支付" :visible.sync="payoff" :before-close="handleClose" custom-class="payOff">
          <div class="payOff_left">
            <p class="payOff_bill">账单信息</p>
            <p class="billMsg">
              <span>账单账号：</span> <span>123456798</span>
            </p>
            <p class="zorder">
              <span>账单时间：<span class="date">2019-7-12 12:36:22</span></span>
            </p>
            <p class="express">
              <span>费用类型：<span>快递费</span></span>
            </p>
            <p class="ready">
              <span>备足：<span>顺丰寄件</span></span>
            </p>
            <p class="payWay">
              <span>付款方式：<span>银行卡转账</span></span>
            </p>
            <p class="money">
              <span>付款金额：<span>159元</span></span>
            </p>
            <div class="proof">
              <span class="proof_span">盖章凭据</span>
              <el-upload action="#" list-type="picture-card" :auto-upload="false" class="ipload">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                  <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                      <i class="el-icon-download"></i>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
              <el-upload action="#" list-type="picture-card" :auto-upload="false" class="ipload">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                  <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                      <i class="el-icon-download"></i>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
              <el-upload action="#" list-type="picture-card" :auto-upload="false" class="ipload">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                  <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                      <i class="el-icon-download"></i>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
            </div>

          </div>
          <div class="payOff_right">
            <span class="moneyMsg">收款账户信息</span>
            <p class="billMsg1">
              <span>收款对象：</span> <span>顺丰</span>
            </p>
            <p class="way">
              <span>收款方式：<span class="date">银行卡</span></span>
            </p>
            <p class="express1">
              <span>开户行：<span>工商银行</span></span>
            </p>
            <p class="ready1">
              <span>收款账号：<span>123356654</span></span>
            </p>
            <p class="tel1">
              <span>联系方式：<span>110</span></span>
            </p>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="payoff = false">取 消</el-button>
            <el-button type="primary" @click="payoff = false">确 定</el-button>
          </span>
        </el-dialog>
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
      payoff: false,
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
    handleDownload(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file) {
      console.log(file);
    }
  }
};
</script>
<style>
.btnDiv {
  float: right;
}
.payOff {
  width: 420px;
  height: 330px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -300px);
}
.payOff_left {
  width: 145pt;
  height: 135pt;
  /* background: hotpink; */
  margin-top: -30px;
}
.payOff_bill {
  display: block;
  color: black;
}
.billMsg {
  margin-top: 2px;
  font-size: 7pt;
}
.billMsg1 {
  margin-left: 8px;
  margin-top: 2px;
  font-size: 7pt;
}
.zorder {
  margin-left: -8px;
}
.express {
  margin-top: 2px;
  font-size: 7pt;
}
.express1 {
  margin-top: 2px;
  font-size: 7pt;
  margin-left: 22px;
}
.ready {
  margin-top: 2px;
  font-size: 7pt;
  margin-left: 25px;
}
.ready1 {
  margin-top: 2px;
  font-size: 7pt;
  margin-left: 12px;
}
.tel1 {
  margin-left: 6px;
}

.payWay {
  margin-top: 2px;
  font-size: 7pt;
}
.money {
  margin-top: 2px;
  font-size: 7pt;
}
.date {
  font-size: 7pt;
}
.el-upload--picture-card {
  background-color: #fbfdff;
  border: 1px solid #999999;
  border-radius: 6px;
  box-sizing: border-box;
  width: 31.2px;
  height: 17px;
  line-height: 146px;
  vertical-align: top;
  margin-left: 8px;
  margin-top: 10px;
}
.el-upload--picture-card i {
  font-size: 24px;
  display: none;
  color: #8c939d;
  position: absolute;
  bottom: 120px;
  left: 112px;
}
.proof_span {
  margin-left: -120px;
  margin-top: 10px;
}
.proof {
  display: flex;
  margin-left: 130px;
}
.payOff_right {
  width: 143pt;
  height: 135pt;
  float: right;
  margin-top: -170px;
  margin-left: 10px;
}
.moneyMsg {
  color: black;
  margin-top: 20px;
}
</style>