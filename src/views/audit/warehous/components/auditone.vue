<template>
<div>
<PageContainer>
<template v-slot:aside>

</template>
<template v-slot:filter>
</template>
<template v-slot:tool>
<el-button size="mini" round>日志</el-button>
<div class="btnDiv">
<el-input v-model="listQuery.title" placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
<el-button size="mini" round>搜索</el-button>
</div>
</template>
<template v-slot:table>
<Table multiselect key="" :loading="loading" :data="checkData.tableData" :columns="tableColumns" :page="checkData.pageIndex" :limit="checkData.pageSize" :total="checkData.total" @changePage="changePage" @selectRow="selectRow">
</Table>
</template>
</PageContainer>
</div>
</template>
<script>
import NavMenu from "./NavMenu";
import WorkOrderState from "./WorkOrderState";
import { all } from "q";
const navmenu = ["待办工单", "未解决工单", "已解决工单", "所有工单"];
import { shouldAudit } from "@/api/financial";
const ConstColumns = [
{
label: "状态",
prop: "billStatus"
},
{
label: "账单账号",
prop: "receivableID"
},
{
label: "账单时间",
prop: "createTime"
},
{
label: "金额",
prop: "feeAmount"
},
{
label: "费用类型",
prop: "feeType"
},
{
label: "备注",
prop: "remarks"
},
{
label: "盖章单据",
prop: "currency"
},
{
label: "付款方式",
prop: "valid"
},
{
label: "应收对象",
prop: "createPeople"
}
];
export default {
name: "shouldCheck",
components: {
NavMenu
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
checkData: {
tableData: [],
pageIndex: 0,
pageSize: 0,
total: 0
},
sendCheck: {
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
getShouldShenpi() {
shouldAudit(this.sendCheck).then(res => {
console.log(res);
this.checkData.tableData = res;
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
selectRow(selectData) {
this.selectRowData = selectData;
},
changePage(val) {
let { limit, page } = val;
this.sendCheck.pageIndex = page;
this.sendCheck.pageSize = limit;
this.getShouldShenpi();
}
},
created() {
this.getShouldShenpi();
}
};
</script>
<style>
.btnDiv {
float: right;
}
</style>