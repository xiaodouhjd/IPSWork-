<template>
  <div class="bg">
    <menuBox></menuBox>
    <div class="box-content">
      <menu-Header></menu-Header>
      <div class="check">
        <div class="check_top">
          <div class="check_top__left">
            <div class="check_line">
              <span class="line1"></span>
              <span class="line2"></span>
              <span class="line3"></span>
            </div>
            <div class="check_time">
              <p>
                <!-- <el-date-picker v-model="value" :picker-options="pickerOptions" placeholder="时间" clear-icon="date" class="abbb">
                </el-date-picker> -->
                <input type="text" placeholder="时间" class="abbb">
              </p>
              <i class="el-icon-refresh-right"></i>

            </div>
            <p class="jian">32件</p>
            <p class="all">盘点总数</p>
          </div>
          <div class="check_top__right">
            <div class="right_small1">
              <p class="jian">32</p>
              <p class="all">待支付</p>
            </div>
            <div class="right_small">
              <p class="jian">32</p>
              <p class="all">扣件</p>
            </div>
            <div class="right_small">
              <p class="jian">32</p>
              <p class="all">问题件</p>
            </div>
            <div class="right_small">
              <p class="jian">32</p>
              <p class="all">退仓</p>
            </div>
          </div>
        </div>
        <div class="check_bto">
          <div class="check_bto__top">
            <cangku></cangku>
            <cangku></cangku>

          </div>
          <div class="check_bto__bto">
            <cangku></cangku>
            <cangku></cangku>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import PageContainer from "@/components/IPS/PageContainer";
import Find from "./components/tableHead";
import WorkOrderState from "./components/WorkOrderState";
import Table from "@/components/IPS/Table";
import hkAbout from "@/components/IPS/Hkabout/Habout";
import cangku from "@/components/IPS/cangku/index";
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
    label: "下单时间",
    prop: "ID"
  },
  {
    label: "件数",
    prop: "ID"
  },
  {
    label: "重量(KG)",
    prop: "ID"
  },
  {
    label: "产品",
    prop: "ID"
  },
  {
    label: "渠道",
    prop: "ID"
  },
  {
    label: "客户",
    prop: "ID"
  },
  {
    label: "电话",
    prop: "ID"
  },
  {
    label: "销售",
    prop: "ID"
  }

  // {
  //   label: "操作",
  //   prop: "ID",
  //   scoped: () => import("./components/WorkOrderHandler")
  // }
  // {
  //   align: "center",
  //   width: "70",
  //   fixed: "right",

  // }
];
export default {
  name: "dispatch",
  components: {
    PageContainer,
    // NavMenu,
    Find,
    Table,
    hkAbout,
    cangku
  },
  data() {
    return {
      shownewManag: {
        show: false
        // title: "新增"
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
      tableColumns: ConstColumns
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
  methods: {
    onSubmit() {},
    remoteMethod() {},
    sign() {
      this.shownewManag.show = !this.shownewManag.show;
      console.log(this.shownewManag.show);
    }
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
// .check {
//   // background: gray;
//   width: 1133px;
//   box-sizing: border-box;
// }
.check_top {
  display: flex;
  margin-top: 20px;
}
.check_bto {
  margin-top: 20pt;
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;
}
.check_top__left {
  width: 431px;
  height: 170px;
  background: #f2f2f2;
  margin-left: 20px;
  border-radius: 5pt;
}
.check_top__right {
  width: 1173px;
  height: 170px;
  background: #f2f2f2;
  margin-left: 26pt;
  border-radius: 5pt;
  display: flex;
  justify-content: space-around;
}
.check_line {
  width: 71pt;
  height: 71pt;
  background: #8ab3f2;
  margin: 8pt 139pt 7pt 7pt;
}
.line1 {
  background: white;
  width: 7px;
  height: 28px;
  display: inline-block;
  margin-top: 40px;
  margin-left: 20px;
}
.line2 {
  background: white;
  width: 7px;
  height: 43px;
  display: inline-block;
}
.line3 {
  background: white;
  width: 7px;
  height: 21px;
  display: inline-block;
}
.abbb {
  width: 26px;
  height: 14px;
  position: absolute;
  top: 20px;
  left: 258px;
  border: none;
  margin-top: 15px;
}
.el-icon-refresh-right {
  position: absolute;
  top: 34px;
  left: 290px;
}
.jian {
  margin-top: -80px;
  display: block;
  font-size: 29pt;
  margin-left: 130px;
}
.all {
  display: block;
  margin-left: 140px;
  margin-top: -30px;
  font-size: 9pt;
  color: #666666;
}
.right_small {
  margin-top: 110px;
}
.right_small1 {
  margin-left: -20px;
  margin-top: 110px;
}
.check_bto__top {
  width: 1133px;
  display: flex;
  margin-top: -10px;
}
.check_bto__bto {
  width: 1133px;
  display: flex;
  margin-top: 15px;
}
</style>
