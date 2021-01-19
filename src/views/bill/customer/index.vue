<template>
<div>
<PageContainer>
<template v-slot:aside>
</template>
<template v-slot:filter>
</template>
<template v-slot:tool>
<el-button size="mini" round>日志</el-button>
<el-button size="mini" round @click="dialogVisible = true">新增</el-button>
<el-dialog title="新增应收账单" :visible.sync="dialogVisible" custom-class="addorder" @opened="shouldAdd">
<div class="order_top">
<span class="spanorder">单号</span>
<input type="text" class="addinput" placeholder="请填写" v-model="orderSend.waybillNo">
<span class="paylx">费用类型</span>
<input type="text" class="addinput" placeholder="请填写" v-model="orderSend.feeType">
<span class="money">金额</span>
<input type="text" class="addinput1" placeholder="请填写" value="元" v-model="orderSend.feeAmount">
</div>
<div class="order_bto">
<span class="beizhu">备注</span>
<input type="text" name="" id="" class="remark" v-model="orderSend.remarks" ref="remark">
</div>
<div class="overFlow">
<el-button @click="dialogVisible = false" class="agian">重置</el-button>
<el-button type="primary" class="save" @click="save">保存</el-button>
</div>
</el-button>
</el-dialog>
<el-button size="mini" round>删除</el-button>
<div class="btn_right">
<el-input v-model="listQuery.title" placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
<el-button size="mini" round>搜索</el-button>
</div>
</template>
<template v-slot:table>
<Table multiselect key="" :data="orderData.tableData" :columns="tableColumns" :loading="loading" :page="orderData.pageIndex" :limit="orderData.pageSize" :total="orderData.total" @changePage="changePage" @selectRow="selectRow"></Table>
</template>
</PageContainer>
</div>
</template>
<script>
import PageContainer from "@/components/IPS/PageContainer";
import Find from "./components/Find";
import WorkOrderState from "./components/WorkOrderState";
import Table from "@/components/IPS/Table";
import { shouOrder, AddshouldOrder } from "@/api/financial";
import { CustomerArray } from "@/api/common";
const ConstColumns = [
{
label: "账单ID",
prop: "receivableID"
},
{
label: "账单号",
prop: "receivableNo"
},
{
label: "类型",
prop: "feeType"
},
{
label: "客户ID",
prop: "customerID"
},
{
label: "运单号",
prop: "waybillNo"
},
{
label: "账单状态",
prop: "billStatus"
},
{
label: "账单金额",
prop: "feeAmount"
},
{
label: "货币",
prop: "currency"
},
{
label: "账单时间",
prop: "createTime"
},
{
label: "创建人",
prop: "createPeople"
},
{
label: "备注",
prop: "remarks"
}
];
export default {
name: "shouldOrder",
components: {
PageContainer,
Find,
Table
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
listQuery: {},
dialogVisible: false,
orderData: {
tableData: [],
pageIndex: 0,
pageSize: 0,
total: 0
},
orderSend: {
pageSize: 20,
pageIndex: 1,
receivableID: 0,
receivableNo: null,
customerID: 1,
waybillNo: null,
feeType: null,
billStatus: 0,
feeAmount: 0,
currency: null,
createTime: "2019-08-30T06:20:47.163Z",
createPeople: null,
remarks: null,
valid: 0
},
send: {
money: "",
title: "",
jine: ""
},
remackValue: ""
};
},
methods: {
getAllOrder() {
shouOrder().then(res => {
console.log(res);
this.orderData.tableData = res;
let shouldNum = this.orderData.tableData.length;
this.orderData.total = shouldNum;
});
},
selectRow(selectData) {
this.selectRowData = selectData;
},
changePage(val) {
let { limit, page } = val;
this.orderSend.pageIndex = page;
this.orderSend.pageSize = limit;
this.getAllOrder();
},
onSubmit() {},
remoteMethod() {},
shouldAdd() {},
save() {
AddshouldOrder(this.orderSend).then(res => {
console.log(res);
});
this.remackValue = this.$refs.remark.value;
}
},
created() {
this.getAllOrder();
},
name: "shouldOrder",
components: {
PageContainer,
Find,
Table
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
listQuery: {},
dialogVisible: false,
orderData: {
tableData: [],
pageIndex: 1,
pageSize: 20,
total: 0
},
orderSend: {
pageSize: 20,
pageIndex: 1,
receivableID: 0,
receivableNo: null,
customerID: 1,
waybillNo: null,
feeType: null,
billStatus: 0,
feeAmount: 0,
currency: null,
createTime: "2019-08-30T06:20:47.163Z",
createPeople: null,
remarks: null,
valid: 0
},
send: {
money: "",
title: "",
jine: ""
},
page: {
pageIndex: 1,
pageSize: 20
},
remackValue: ""
};
},
methods: {
getAllOrder() {
shouOrder(this.page).then(res => {
console.log(res);
this.orderData.tableData = res;
let shouldNum = this.orderData.tableData.length;
this.orderData.total = shouldNum;
});
},
selectRow(selectData) {
this.selectRowData = selectData;
},
changePage(val) {
let { limit, page } = val;
this.orderSend.pageIndex = page;
this.orderSend.pageSize = limit;
this.getAllOrder();
},
onSubmit() {},
remoteMethod() {},
shouldAdd() {},
save() {
AddshouldOrder(this.orderSend).then(res => {
console.log(res);
});
this.remackValue = this.$refs.remark.value;
}
},
created() {
this.getAllOrder();
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
.table-header {
padding: 20px;
height: 80px;
border-bottom: 20px solid #e9e7e7;
display: flex;
justify-content: space-between;
}
.header_left {
margin-top: 50px;
}
.header_right {
margin-top: 60px;
}
.addorder {
width: 393pt;
height: 222pt;
// background: goldenrod;
}
.order_top {
display: flex;
flex-wrap: wrap;
align-items: center;
margin-top: -30px;
}
.paylx {
margin-left: 20px;
}
.money {
margin-left: 20px;
margin-top: 14pt;
color: #666666;
}
.serchP {
width: 131pt;
margin-right: 20px;
height: 16pt;
border-radius: 3pt;
border: 1px solid #999999;
}
.addinput {
width: 124pt;
height: 19pt;
border: 1px solid #999999;
margin-left: 10px;
}
.addinput1 {
width: 124pt;
height: 19pt;
border: 1px solid #999999;
margin-left: 10px;
margin-top: 15px;
}
.spanorder {
margin-left: 20px;
}
.order_bto {
margin-top: -5px;
margin-left: -200px;
}
.remark {
width: 301pt;
height: 53pt;
border: 1px solid #999999;
margin-left: 25px;
margin-top: 20px;
}
.beizhu {
margin-left: 200px;
}
.btnone {
width: 35pt;
height: 16pt;
background: #256ad1;
border-radius: 3pt;
color: white;
border: none;
}
.btntwo {
width: 50pt;
height: 16pt;
background: white;
border-radius: 16pt;
color: white;
border: 1px solid #053e94;
color: #053e94;
margin-left: 15px;
}
.el-dialog__title {
line-height: 24px;
font-size: 18px;
color: #303133;
margin-left: 200px;
}
.overFlow {
margin-top: 30px;
margin-left: 305px;
}
</style>
