<template>
<div>
<PageContainer>
<template v-slot:filter>
<div class="filter-container">
<el-input v-model="listQuery.title" placeholder="运单号" style="width: 200px;" class="filter-item" />
<el-select v-model="listQuery.region" placeholder="运单状态" class="filter-item">
<el-option label="正常" value="shanghai"></el-option>
<el-option label="非正常" value="beijing"></el-option>
</el-select>
<el-date-picker class="filter-item" v-model="listQuery.date" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
</el-date-picker>
<el-button v-waves class="filter-item" type="primary" icon="el-icon-search">
查找
</el-button>
</div>
</template>
<template v-slot:tool>
<el-button size="mini" round>添加轨迹</el-button>
</template>
<template v-slot:table>
<Table :data="tableData" :columns="tableColumns" :page="page" :limit="limit" :total="total" :loading="loading"></Table>
</template>
</PageContainer>
<WaybillInfo :drawer="drawer" @drawerClose="close"></WaybillInfo>
</div>
</template>

<script>
import waves from "@/directive/waves";
import WaybillInfo from "./components/WaybillInfo";
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
label: "单号",
prop: "Age"
},
{
label: "客户名称",
prop: "ID"
},
{
label: "下单时间",
prop: "ID"
},
{
align: "center",
width: "70",
fixed: "right",
scoped: () => import("@/components/IPS/TableScoped/handler")
}
];
export default {
name: "WayBillQuery",
directives: { waves },
components: {
WaybillInfo
},
data() {
return {
title: "",
listQuery: {},
formInline: {},
value: "",
value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
options: [],
loading: false,
page: 0,
limit: 20,
total: 100,
tableColumns: ConstColumns,
drawer: false
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
hander: this.showWaybillInfo
};
},
methods: {
onSubmit() {},
remoteMethod() {},
handleFilter() {},
showWaybillInfo() {
this.drawer = true;
},
close() {
this.drawer = false;
}
}
};
</script>

<style lang="scss" >
.container {
min-height: calc(100vh - 84px);
}
</style>
