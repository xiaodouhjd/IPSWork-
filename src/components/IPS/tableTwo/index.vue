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
<el-button size="mini" round @click="share">添加成本</el-button>
<div class="btn_right">
</div>
</template>
<template v-slot:table>
<Table :data="costData.tableData" multiselect key="" :columns="tableColumns" :loading="loading" :page="costData.pageIndex" :limit="costData.pageSize" :total="costData.total" @changePage="changePage" @selectRow="selectRow"></Table>
</template>
</PageContainer>
<hk-About :shownewManag="shownewManag" :WaybillNos="WaybillNos"></hk-About>
</div>
</template>
<script>
import PageContainer from "@/components/IPS/PageContainer";
import Find from "./components/Find";
import WorkOrderState from "./components/WorkOrderState";
import Table from "@/components/IPS/Table";
import hkAbout from "@/components/IPS/cost/index";
import { constants } from "crypto";
import { getcost } from "@/api/financial";
const ConstColumns = [
{
label: "提单号",
prop: "FilghtWaybillNo"
},
{
label: "件数",
prop: "Piece"
},
{
label: "重量(KG)",
prop: "Weight"
},
{
align: "center",
width: "70",
label: "操作",
fixed: "right",
scoped: () => import("@/views/costshare/components/tableTwo.vue")
}
];
export default {
name: "sharecost",
components: {
PageContainer,
Find,
Table,
hkAbout
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
page: 0,
limit: 20,
total: 100,
tableColumns: ConstColumns,
costData: {
tableData: [],
pageIndex: 0,
pageSize: 0,
total: 0
},
SendcostData: {
pageSize: 20,
pageIndex: 1,
vaild: 0
},
selectRowData: []
};
},
computed: {
WaybillNos() {
return [...new Set([...this.selectRowData].map(x => x.WaybillNo))];
}
},
methods: {
getCostList() {
getcost().then(res => {
console.log(res);
this.costData.tableData = res.DataList;
});
},
onSubmit() {},
remoteMethod() {},
changePage(val) {
let { limit, page } = val;
this.SendcostData.pageIndex = page;
this.SendcostData.pageSize = limit;
this.getCostList();
},
selectRow(selectData) {
this.selectRowData = selectData;
},
sign() {},
share() {
this.shownewManag.show = !this.shownewManag.show;
}
},
created() {
this.getCostList();
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
