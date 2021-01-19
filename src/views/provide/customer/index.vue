<template>
  <div>
    <PageContainer>
      <template v-slot:aside>
      </template>
      <template v-slot:filter>
      </template>
      <template v-slot:tool>
        <el-button size="mini" round>日志</el-button>
        <el-button size="mini" round @click="dialogVisible = true">新增</el-button>
        <el-dialog title="新增服务商" :visible.sync="dialogVisible" custom-class=" add" @opened="addOpen" @closed="close">
          <div class="proAll">
            <div class="provder">
              <p class="pro1">
                <span>服务商名称</span>
                <el-input v-model="listQuery.providerName" placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
              </p>
              <p class="pro">
                <span>地址</span>
                <el-input placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
              </p>
              <p class="pro11">
                <span>联系人</span>
                <el-input placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
              </p>
              <p class="prot">
                <span>联系电话</span>
                <el-input placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
              </p>
            </div>
            <div class="pro-right">
              <p class="prov">
                <span>服务商名称</span>
                <el-input placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
              </p>
              <p class="pror">
                <span>地址</span>
                <el-input placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
              </p>
              <p class="pro12">
                <span>联系人</span>
                <el-input placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
              </p>
              <p class="prot2">
                <span>联系电话</span>
                <el-input v-model="listQuery.contactPhone" placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" ref="phone" />
              </p>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">重置</el-button>
            <el-button type="primary" @click="dialogVisible = false">保存</el-button>
          </span>
        </el-dialog>
        <el-button size="mini" round @click="deletePro">删除</el-button>
        <div class="btn_right">
          <el-input v-model="listQuery.title" placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
          <el-button size="mini" round @click="serachProvider">搜索</el-button>
          <el-button size="mini" round @click="refresh">刷新</el-button>
        </div>
      </template>
      <template v-slot:table>
        <Table multiselect key="proList_key" :data="proList.tableData" :columns="tableColumns" :loading="loading" :limit="proList.pageSize" :total="proList.total" @changePage="changePage" @selectRow="selectRow"></Table>
      </template>
    </PageContainer>
  </div>
</template>
<script>
import Find from "./components/Find";
import WorkOrderState from "./components/WorkOrderState";
import { provider, findProvider, addOrder } from "@/api/financial";
const ConstColumns = [
  {
    label: "服务商",
    prop: "providerName"
  },
  {
    label: "状态",
    prop: "mnemonicCode"
  },
  {
    label: "类型",
    prop: "paymentType"
  },
  {
    label: "结算模式",
    prop: "paymentType"
  },
  {
    label: "收款方式",
    prop: "paymentMethod"
  },
  {
    label: "收款账号",
    prop: "bankCode"
  },
  {
    label: "收款人",
    prop: "paymentPeople"
  },
  {
    label: "联系电话",
    prop: "contactPhone"
  },
  {
    label: "操作",
    prop: ""
  }
];
export default {
  name: "provider",
  components: {
    Find
  },
  data() {
    return {
      selectData: [],
      shownewManag: {
        show: false
      },
      title: "",
      formInline: {},
      value: "",
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      options: [],
      loading: false,
      tableColumns: ConstColumns,
      listQuery: {
        providerId: 0,
        mnemonicCode: "牛逼",
        providerName: "科比",
        providerType: 0,
        valid: 0,
        paymentType: 0,
        paymentMethod: 0,
        bankCode: "韦德",
        paymentAccount: "詹姆斯",
        paymentPeople: "科比",
        contactPhone: 23232323,
        remarks: "保罗"
      },
      dialogVisible: false,
      proList: {
        tableData: [],
        pageIndex: 0,
        pageSize: 0,
        total: 0
      },
      findProvider: {
        pageSize: 20,
        pageIndex: 1,
        code: "",
        name: ""
      },
      newSeleteData: []
    };
  },

  methods: {
    deletePro() {
      this.proList.tableData.splice(this.newSeleteData, 1);
    },
    onSubmit() {},
    remoteMethod() {},
    getProviderList() {
      provider().then(res => {
        this.proList.tableData = res;
        let totalNum = this.proList.tableData.length;
        this.proList.total = totalNum;
      });
    },
    selectRow(selectData) {
      this.selectRowData = selectData;
      this.newSeleteData = selectData;
    },
    changePage(val) {
      console.log(val.limit);
      console.log(val.page);
      let { limit, page } = val;
      this.findProvider.pageIndex = page;
      this.findProvider.pageSize = limit;
      this.getProviderList();
    },
    serachProvider() {
      findProvider(this.findProvider).then(res => {
        this.proList.tableData = res;
      });
    },
    refresh() {
      this.serachProvider();
    },
    addOpen() {
      console.log(this.$refs.phone);
      setTimeout(
        addOrder(this.listQuery).then(res => {
          console.log(res);
        }),
        0
      );
    },
    close() {
      this.getProviderList();
    }
  },

  mounted() {
    this.getProviderList();
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
.proinput {
  width: 262px;
  height: 32px;
}
.add {
  width: 785px;
  height: 445px;
  background: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-265px, -300px);
}
.inputSame {
  width: 124pt;
  height: 19pt;
  border: 1px solid #999999;
  margin-left: 10px;
}
.inputSame1 {
  width: 124pt;
  height: 19pt;
  border: 1px solid #999999;
  margin-left: 18px;
}
.inputSame2 {
  width: 124pt;
  height: 19pt;
  border: 1px solid #999999;
  margin-left: 25px;
}
.provder {
  margin-top: -40px;
  margin-left: 50px;
}
.pro {
  margin-top: 15px;
  margin-left: 20px;
}
.pror {
  margin-left: 60px;
}
.pro1 {
  margin-top: 15px;
  margin-left: -20px;
}
.pro11 {
  margin-top: 15px;
  margin-left: 5px;
}
.pro12 {
  margin-top: 15px;
  margin-left: 45px;
}
.prot {
  margin-left: -8px;
}
.prot2 {
  margin-left: 30px;
}
.prov {
  margin-top: 20px;
  margin-left: 15px;
}
.proAll {
  display: flex;
  align-items: center;
}
.pro-right {
  margin-top: -40px;
  margin-left: 10px;
}
.el-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
  margin-left: 300px;
}
</style>
