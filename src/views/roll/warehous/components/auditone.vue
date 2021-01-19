<template>
<div>
<PageContainer>
<template v-slot:aside>

</template>
<template v-slot:filter>
<!-- <find></find> -->
</template>
<template v-slot:tool>

<el-button size="mini" round class="chaxun">轧账</el-button>
<el-button size="mini" round class="rizhi">日志</el-button>

<div class="btnDiv">
<el-input v-model="listQuery.title" placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
<el-button size="mini" round>搜索</el-button>
<el-button size="mini" round>刷新</el-button>
</div>
</template>
<template v-slot:table>
<Table :data="tableData" :columns="tableColumns" :loading="loading" multiselect key="" :page="rollData.pageIndex" :limit="rollData.pageSize" :total="rollData.total" @changePage="changePage" @selectRow="selectRow"></Table>
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
prop: "ID"
},
{
label: "订单号",
prop: "ID"
},
{
label: "账单号",
prop: "ID"
},
{
label: "客户编号",
prop: "ID"
},
{
label: "应收金额",
prop: "ID"
},
{
label: "币种",
prop: "Age"
},
{
label: "付款账号",
prop: "Age"
},
{
label: "收款人",
prop: "Age"
},
{
label: "业务编号",
prop: "Age"
},
{
label: "订单号",
prop: "Age"
},
{
label: "日期",
prop: "Age"
},
{
label: "操作",
prop: "Age"
}
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
rollData: {
tableData: [],
pageIndex: 0,
pageSize: 0,
total: 0
},
selectRowData: [],
sendRollData: {
pageIndex: 1,
pageSize: 20
}
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
getAllRollData() {},
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
selectRow(selectData) {
this.selectRowData = selectData;
},
changePage(val) {
let { limit, page } = val;
this.sendRollData.pageIndex = page;
this.sendRollData.pageSize = limit;
this.getAllRollData();
}
},
created() {}
};
</script>
<style>
.btnDiv {
float: right;
margin-top: -25px;
}

.rizhi {
margin-top: 20px;
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