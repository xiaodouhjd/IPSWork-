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
<el-dialog title="新增应收账单" :visible.sync="dialogVisible" custom-class="addorderPay" @open="shouldPayAdd">
<div class="orderPay_left">
<div class="order_flex">
<span>单号</span>
<input type="text" placeholder="请填写" class="orderInput" v-model="shouldSend.waybillNo">
</div>
<div class="order_flex">
<span>项目</span>
<input type="text" placeholder="请填写" class="orderInput" v-model="shouldSend.businessNo">
</div>
<div class="order_flex">
<span>金额</span>
<input type="text" placeholder="请填写" class="orderInput" v-model="shouldSend.feeAmount">
</div>
<div class="order_flex">
<span class="payObj">应付对象</span>
<input type="text" placeholder="请填写" class="orderInput" v-model="shouldSend.paymentItem">
</div>
<div class="order_flex">
<span class="payObj1">上传凭证</span>
<el-upload action="#" list-type="picture-card" :auto-upload="false" class="ipload">
<i slot="default" class="el-icon-plus"></i>
<div slot="file" slot-scope="{file}">
<img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
<span class="el-upload-list__item-actions">
<span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
<i class="el-icon-zoom-in"></i>
</span>
<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
<i class="el-icon-download"></i>
</span>
<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
<i class="el-icon-delete"></i>
</span>
</span>
</div>
</el-upload>
</div>
<span class="checkSpan">
<el-checkbox v-model="checked" class="checkD">钉钉</el-checkbox>
</span>
</div>
<div class="orderPay_right">
<div class="order_flex">
<span>事由</span>
<input type="text" placeholder="请填写" class="orderInput" v-model="shouldSend.paymentItem">
</div>
<div class="order_flex">
<span class="payway">付款方式</span>
<input type="text" placeholder="请填写" class="orderInput" v-model="shouldSend.feeType">
</div>
</div>
<span slot="footer" class="dialog-footer">
<div class="btnfooter">
<el-button @click="dialogVisible = false" class="ref">重置</el-button>
<el-button type="primary" @click="saveTwo">保存</el-button>
</div>
</span>
</el-dialog>
<el-button size="mini" round>删除</el-button>
<div class="btn_right">
<el-input v-model="listQuery.title" placeholder="请输入服务商名称" style="width: 200px;" class="filter-item proinput" @keyup.enter.native="handleFilter" />
<el-button size="mini" round>搜索</el-button>
</div>
</template>
<template v-slot:table>
<Table multiselect key="" :data="shouPayData.tableData" :columns="tableColumns" :loading="loading" :page="shouPayData.pageIndex" :limit="shouPayData.pageSize" :total="shouPayData.total" @changePage="changePage" @selectRow="selectRow"></Table>
</template>
</PageContainer>
</div>
</template>
<script>
import PageContainer from "@/components/IPS/PageContainer";
import WorkOrderState from "./components/WorkOrderState";
import Table from "@/components/IPS/Table";
import { shouldPayOrder, addShouldPayOrder } from "@/api/financial";
const ConstColumns = [
{
label: "应付账单ID",
prop: "payableID"
},
{
label: "应付供应商ID",
prop: "providerID"
},
{
label: "应付业务单号",
prop: "businessNo"
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
label: "账单状态",
prop: "billStatus"
},
{
label: "应付是由",
prop: "paymentItem"
},
{
label: "应付详情",
prop: "paymentCause"
},
{
label: "创建时间",
prop: "createTime"
},
{
label: "创建人",
prop: "createPeople"
},
{
label: "审核状态",
prop: "billResult"
}
];
export default {
name: "dispatch",
components: {
PageContainer,
Table
},
data() {
return {
checked: "",
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
shouPayData: {
tableData: [],
pageIndex: 0,
pageSize: 0,
total: 0
},
shouldSend: {
pageIndex: 1,
pageSize: 20,
payableID: 0,
providerID: null,
businessNo: null,
feeType: null,
feeAmount: 0,
currency: null,
billStatus: 0,
paymentItem: null,
paymentCause: null,
createPeople: null,
createTime: "2019-08-28T07:58:25.678Z",
dingtalkApprovalID: 0,
billResult: null,
remarks: null,
valid: 0,
waybillNo: null
},
page: {
pageIndex: 1,
pageSize: 20
}
};
},
methods: {
getAllshouldPay() {
shouldPayOrder(this.page).then(res => {
console.log(res);
this.shouPayData.tableData = res;
let shouPayNum = this.shouPayData.tableData.length;
this.shouPayData.total = shouPayNum;
});
},
onSubmit() {},
remoteMethod() {},
selectRow(selectData) {
this.selectRowData = selectData;
},
changePage(val) {
let { limit, page } = val;
this.shouldSend.pageIndex = page;
this.shouldSend.pageSize = limit;
this.getAllshouldPay();
},
shouldPayAdd() {},
saveTwo() {
addShouldPayOrder(this.shouldSend).then(res => {});
}
},
created() {
this.getAllshouldPay();
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
.checkSpan {
margin-left: 500px;
}
.header_left {
margin-top: 50px;
}
.header_right {
margin-top: 60px;
}
.addorderPay {
width: 511px;
height: 314pt;
// background: goldenrod;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -350px);
}
.orderPay_left {
margin-left: -230px;
margin-top: -30px;
box-sizing: border-box;
}
.orderInput {
width: 124pt;
height: 19pt;
border: 1px solid #999999;
margin-left: 10px;
}
.order_flex {
margin-top: 20px;
margin-left: 250px;
}
.payObj {
margin-left: -25px;
}
.payObj1 {
margin-left: -25px;
margin-top: 20px;
}
.el-upload--picture-card {
background-color: #fbfdff;
border: 1px solid #999999;
border-radius: 6px;
box-sizing: border-box;
width: 34pt;
height: 34pt;
line-height: 146px;
vertical-align: top;
margin-top: -10px;
margin-left: 65px;
}
.el-upload--picture-card i {
font-size: 28px;
color: #8c939d;
position: absolute;
bottom: 120px;
left: 112px;
}
.checkD {
margin-top: 50px;
margin-left: -200px;
border-radius: 50%;
}
.orderPay_right {
margin-top: -275px;
}
.payway {
margin-left: -20px;
}
.btnfooter {
margin-top: 130px;
}
.btnone {
width: 35pt;
height: 16pt;
background: #256ad1;
border-radius: 3pt;
color: white;
border: none;
}
</style>
