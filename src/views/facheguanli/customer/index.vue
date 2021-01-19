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
<el-button size="mini" round>签收</el-button>
<div class="btn_right">
<el-button size="mini" round>下载发票</el-button>
</div>
</template>
<template v-slot:table>
<Table multiselect key="" :data="facheData.tableData" :columns="tableColumns" @selectRow="selectRow" :limit="facheData.pageSize" :total="facheData.total" @changePage="changePage" :page="facheData.pageIndex" :loading="loading"></Table>
</template>
</PageContainer>
</div>
</template>
<script>
import Find from "./components/Find";
import WorkOrderState from "./components/WorkOrderState";
import { facheList } from "@/api/dispatch";
const ConstColumns = [
{
label: "状态",
prop: ""
},
{
label: "运单号",
prop: "TaskIds"
},
{
label: "倒库时间",
prop: "StartTime"
},
{
label: "产品",
prop: ""
},
{
label: "渠道",
prop: ""
},
{
label: "已用时",
prop: "AddTime"
},
{
label: "完成时间",
prop: "StartTime"
},
{
label: "总用时",
prop: ""
},
{
label: "运单状态",
prop: "Completed"
}
];
export default {
name: "dispatch",
components: {
Find
},
data() {
return {
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
facheData: {
tableData: [],
pageIndex: 0,
pageSize: 0,
total: 0
},
sendFacheData: {
pageIndex: 1,
pageSize: 20
}
};
},
methods: {
getFacheList() {
facheList().then(res => {
console.log(res);
this.facheData.tableData = res;
let facheNum = this.facheData.tableData.length;
this.facheData.total = facheNum;
});
},
onSubmit() {},
remoteMethod() {},
selectRow(selectData) {
this.selectRowData = selectData;
},
changePage(val) {
console.log(val);
let { limit, page } = val;
this.sendFacheData.pageIndex = page;
this.sendFacheData.pageSize = limit;
this.getUserWorkOrder();
}
},
created() {
this.getFacheList();
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
</style>
