<template>
<div>
<PageContainer>
<template v-slot:aside>
</template>
<template v-slot:filter>
<Find></Find>
</template>
<template v-slot:tool>
<el-button size="mini" round>日志</el-button>
<div class="btn_right">
<el-button size="mini" round @click="download">下载发票</el-button>
</div>
</template>
<template v-slot:table>
<Table :data="newData.tableData" :columns="tableColumns" :loading="loading" :limit="newData.pageSize" :total="newData.total" @changePage="changePage" @selectRow="selectRow"></Table>
</template>
</PageContainer>
</div>
</template>
<script>
import PageContainer from "@/components/IPS/PageContainer";
import Find from "./components/Find";
import WorkOrderState from "./components/WorkOrderState";
import Table from "@/components/IPS/Table";
import { forecast } from "@/api/dispatch";
const ConstColumns = [
{
label: "预报订单号",
prop: "WaybillNo"
},
{
label: "运输方式",
prop: ""
},
{
label: "物流公司/单号",
prop: "ThridExpressDto"
},
{
label: "销售产品",
prop: "GoodsType"
},
{
label: "目的国家",
prop: "CountryCode"
},
{
label: "件数",
prop: "GoodsPiece"
},
{
label: "重量",
prop: "TotalWeight"
},
{
label: "报关",
prop: "TotalWeight"
},
{
label: "客户编码",
prop: "CustomerCode"
},
{
label: "业务员",
prop: "TotalWeight"
},
{
label: ""
// scoped: order
}
];
export default {
name: "dispatch",
components: {
PageContainer,
Find,
Table
},
data() {
return {
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
newData: {
tableData: [],
pageSize: 0,
pageIndex: 0,
total: 0
},
selectRowData: []
};
},

methods: {
onSubmit() {},
remoteMethod() {},
download() {},
changePage(val) {
let { limit, page } = val;
this.newData.pageIndex = page;
this.newData.page;
this.getCustmoer();
},
getCustmoer() {
forecast().then(res => {
this.newData.tableData = res.DataList;
console.log(this.newData.tableData.length);
let forListNum = this.newData.tableData.length;
this.newData.total = forListNum;
});
},
selectRow(selectData) {
this.selectRowData = selectData;
}
},
created() {
this.getCustmoer();
this.$center.$on("send-data", newList => {
this.newData.tableData = newList;
});
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
