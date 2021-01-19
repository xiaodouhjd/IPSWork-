<template>
<div>
<PageContainer>
<template v-slot:aside>
</template>
<template v-slot:tool>
<div class="boxFlex">
<el-input placeholder="订单编号" style="width: 200px;" class="filter-item " @keyup.enter.native="handleFilter" />
<customer class="filter-item"></customer>
<el-date-picker class="filter-item" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
</el-date-picker>
</div>
<el-button size="mini" round class="rizhi">日志</el-button>
<el-button size="mini" round class="rizhi" @click="pass">通过</el-button>
<div class="btnDiv">
<el-button type="primary" size="mini" @click="findOneInvoriceList">查询</el-button>
</div>
</template>
<template v-slot:table>
<Table :data="OrderOneData.tableData" :columns="tableColumns" :loading="loading" multiselect key="" :page="OrderOneData.pageIndex" :limit="OrderOneData.pageSize" :total="OrderOneData.total" @changePage="changePage" @selectRow="selectRow"></Table>
</template>
</PageContainer>
</div>
</template>
<script>
import PageContainer from "@/components/IPS/PageContainer";
import NavMenu from "./NavMenu";
import WorkOrderState from "./WorkOrderState";
import Table from "@/components/IPS/Table";
import { all } from "q";
import { getOneInvoiceList, findInvoiceList } from "@/api/financial";
const navmenu = ["待办工单", "未解决工单", "已解决工单", "所有工单"];
const ConstColumns = [
{
label: "状态",
prop: "iid"
},
{
label: "订单编号",
prop: ""
},
{
label: "客户编号",
prop: "customerID"
},
{
label: "联系方式",
prop: ""
},
{
label: "发票抬头",
prop: "invoiceNature"
},
{
label: "发票金额",
prop: "invoiceAmount"
},
{
label: "发票类型",
prop: "invoiceType"
},
{
label: "申请时间",
prop: "createDate"
}
];
export default {
name: "orderManage",
components: {
PageContainer,
NavMenu,
Table
},
data() {
return {
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
region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
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
resource: [{ required: true, message: "请选择活动资源", trigger: "change" }],
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
OrderOneData: {
tableData: [],
pageIndex: 0,
pageSize: 0,
total: 0
},
sendOrderOneData: {
pageIndex: 1,
pageSize: 20
},
selectRowData: []
};
},
provide() {
return {
hander: this.hander
};
},
methods: {
findOneInvoriceList() {
findInvoiceList().then(res => {
console.log(res);
// this.OrderOneData.tableData = res;
//  res 返回的是一个object
});
},
selectRow(selectData) {
this.selectRowData = selectData;
},
changePage(val) {
let { limit, page } = val;
this.sendOrderOneData.pageIndex = page;
this.sendOrderOneData.pageSize = limit;
this.getInvoiceAllList();
},
getInvoiceAllList() {
getOneInvoiceList(this.sendOrderOneData).then(res => {
console.log(res);
this.OrderOneData.tableData = res;
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
pass() {
// console.log(2232);
}
},
created() {
this.getInvoiceAllList();
}
};
</script>
<style>
.btnDiv {
float: right;
margin-top: -30px;
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
.boxFlex {
display: flex;
justify-content: space-around;
}
</style>