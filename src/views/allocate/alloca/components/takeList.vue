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
<el-dialog title="修改航空信息" :visible.sync="addhk" width="265px" custom-class="addH">
<div class="model"><span class="span">航班号</span> <input type="text" class="inputAll" placeholder="CZ369852"></div>
<div class="model"><span class="span">提单号</span> <input type="text" class="inputAll2" placeholder="--"></div>
<div class="model"><span class="span3">预计出发时间</span> <input type="text" class="inputAll3" placeholder="--"></div>
<div class="model"><span class="span3">预计到达时间</span> <input type="text" class="inputAll3" placeholder="--"></div>
<span slot="footer" class="dialog-footer">
<el-button type="primary" @click="addhk = false" class="subfilg">提交</el-button>
</span>
</el-dialog>
<el-button size="mini" round @click="addexpress=true">添加包裹号</el-button>
<el-dialog title="包裹号" :visible.sync="addexpress" width="265px" custom-class="addexp">
<div class="model"><span class="span">包裹号</span> <input type="text" class="inputAll" placeholder="CZ369852"></div>
<span slot="footer" class="dialog-footer">
<el-button type="primary" @click="addexpress = false" class="subfilg">提交</el-button>
</span>
</el-dialog>
<el-button size="mini" round @click="exchange=true">更改预报地</el-button>
<el-dialog title="更改预报地" :visible.sync="exchange" width="265px" custom-class="exchange" ref="dialog">
<div class="model"><span class="span">预报地</span> <input type="text" class="inputAll1" placeholder="广州"><input type="text" class="inputAll1" placeholder="修改"></div>
<span slot="footer" class="dialog-footer">
<el-button type="primary" @click="exchange = false" class="subfilg">提交</el-button>
</span>
</el-dialog>
</template>
<template v-slot:table>
<Table multiselect key="" :data="allocData.tableData" :columns="tableColumns" :loading="loading" :page="allocData.pageIndex" :limit="allocData.pageSize" :total="allocData.total" @changePage="changePage" @selectRow="selectRow"></Table>
</template>
</PageContainer>
</div>
</template>
<script>
import Find from "./Find";
import NavMenu from "./NavMenu";
import Table from "@/components/IPS/Table/index";
import { all } from "q";
const navmenu = ["待办工单", "未解决工单", "已解决工单", "所有工单"];
import { getTakeList } from "@/api/dispatch";
const ConstColumns = [
{
label: "状态",
prop: "GoodsStatus"
},
{
label: "运单号",
prop: "WaybillNo"
},
{
label: "子单号",
prop: "SonWaybillNo"
},
{
label: "包裹号",
prop: "BagNo"
},
{
label: "发车单",
prop: "TransportID"
},
{
label: "航班号",
prop: "FlightNo"
},
{
label: "提单号",
prop: "FilghtWaybillNo"
},
{
label: "始发地",
prop: ""
},
{
label: "目的地",
prop: "End"
},
{
label: "计划出发",
prop: ""
},
{
label: "计划到达",
prop: ""
},
{
label: "实际出发",
prop: "OutTime"
},
{
label: "实际到达",
prop: "ArriveTime"
},
{
label: "件数",
prop: "Piece"
},
{
label: "计划到达",
prop: ""
},
{
label: "运输状态",
prop: "Volume"
}
];
export default {
name: "cancelsalesapply",
components: {
NavMenu,
Find,
Table
},
data() {
return {
ruleForm: {
name: "",
region: "",
date1: "",
date2: "",
delivery: false,
type: [],
resource: "",
desc: "",
loading: false
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
tableColumns: ConstColumns,
navmenu: navmenu,
addhk: false,
addexpress: false,
exchange: false,
allocData: {
tableData: [],
pageIndex: 0,
pageSize: 0,
total: 0
},
sendAllocData: {
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
AllocList() {
getTakeList().then(res => {
console.log(res);
this.allocData.tableData = res.DataList;
let allocaNum = this.allocData.tableData.length;
this.allocData.total = allocaNum;
console.log(this.allocData.total);
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
yubaodi() {},
onSubmit() {},
remoteMethod() {},
hander() {
const rote = {
name: "workorderhandler"
};
this.$router.push(rote);
},
changePage(val) {
console.log(val);
let { limit, page } = val;
this.sendAllocData.pageIndex = page;
this.sendAllocData.pageSize = limit;
this.AllocList();
},
selectRow(selectData) {
this.selectRowData = selectData;
}
},
mounted() {},
created() {
this.AllocList();
}
};
</script>