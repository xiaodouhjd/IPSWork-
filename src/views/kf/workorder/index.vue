<template>
<div>
<PageContainer>
<template v-slot:filter>
<div class="filter-container">
<el-input v-model="find.workNo" placeholder="工单编号" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
<customer class="filter-item" :value.sync="find.customerID"></customer>
<Select select-key="WorkOrderState" :value.sync="find.WorkOrderState" placeholder="工单状态" class="filter-item">

</Select>
<el-date-picker class="filter-item" v-model="find.createDate" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
</el-date-picker>
<el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
查找
</el-button>
</div>
</template>
<template v-slot:tool>
<!-- <el-button size="mini" round @click="submit">处理工单</el-button> -->
</template>
<template v-slot:table>
<Table multiselect key="t_workorder" :loading="loading" :data="dataTable.dataList" :columns="tableColumns" :page="dataTable.pageIndex" :limit="dataTable.pageSize" :total="dataTable.total" @changePage="changePage" @selectRow="selectRow">
</Table>
</template>
</PageContainer>
</div>
</template>
<script>
import { GetUserWorkOrders, HandlerWorkOrders } from "@/api/workorder";
import { parseData, getOnlyVaule, CustomerArray } from "@/api/common";
const ConstColumns = () => {
return [
{
label: "工单编号",
prop: "workNo"
},
{
label: "工单类型",
prop: "workOrderType"
},
{
label: "客户ID",
prop: "customerID"
},
{
label: "客户名称",
prop: "name"
},
{
label: "问题类型",
prop: "1"
},
{
label: "问题描述",
prop: ""
},
{
label: "提交人",
prop: "submitID",
width: "70"
},
{
label: "客服受理",
prop: "csHandler",
width: "80",
formatter: row => {
if (row.csHandler === 1) return { text: "是", type: "success" };
else return { text: "否", type: "warning" };
},
scoped: () => import("@/components/IPS/TableScoped/Tag")
},
{
label: "提交日期",
prop: "createDate",
width: "100",
showOverflowTooltip: true
},
{
label: "跟单人",
prop: "serviceID",
width: "70"
},
{
label: "状态",
prop: "workOrderStatus",
width: "70",
formatter: row => {
if (row.workOrderStatus === 0)
return { text: "待处理", effect: "dark", type: "warning" };
else return { text: "处理中", effect: "dark", type: "success" };
},
scoped: () => import("@/components/IPS/TableScoped/Tag")
},
{
align: "center",
width: "70",
fixed: "right",
scoped: () => import("@/components/IPS/TableScoped/handler")
}
];
};
export default {
name: "WorkOrder",
components: {},
data() {
return {
find: {
workNo: null,
customerID: null,
WorkOrderState: null,
createDate: [],
pageIndex: 1,
pageSize: 20
},
loading: false,
dataTable: {
pageIndex: 0,
pageSize: 0,
total: 0,
dataList: []
},
tableColumns: ConstColumns(),
selectRowData: []
};
},
computed: {},
provide() {
return {
hander: this.hander
};
},
created() {
this.getUserWorkOrder();
},
methods: {
getJoin(dataList) {
return getOnlyVaule(dataList, x => x.customerID);
},
changePage(val) {
let { limit, page } = val;
this.find.pageIndex = page;
this.find.pageSize = limit;
this.getUserWorkOrder();
},
getUserWorkOrder() {
this.loading = true;
GetUserWorkOrders(this.find)
.then(res => {
let { dataList } = res;
this.getJoin(dataList);
const baseArray = [
{
id: 1,
name: "智慧包裹SD"
},
{
id: 2,
name: "智慧包裹"
}
];
res.dataList = parseData(dataList, x =>
baseArray.find(f => f.id == x.customerID)
);
this.dataTable = res;
})
.finally(() => {
this.loading = false;
});
},
handleFilter() {
this.getUserWorkOrder();
},
selectRow(selectData) {
this.selectRowData = selectData;
},
hander({ row }) {
let { workID } = row;
HandlerWorkOrders([workID]).then(res => {
this.getUserWorkOrder();
});
const rote = {
name: "workorderhandler",
params: { workID }
};
this.$router.push(rote);
}
}
};
</script>
<style lang="scss">
.container {
min-height: calc(100vh - 84px);
}
</style>
