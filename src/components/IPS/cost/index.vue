<template>
<div v-show="xianshi">
<el-dialog :title="shownewManag.title" :visible.sync="shownewManag.show" custom-class="shaixuan">
<div class="inlineBox">
<el-table :data="tableData" style="width: 100%">
<el-table-column type="selection" width="55">
</el-table-column>
<el-table-column prop="date" label="账单号">
</el-table-column>
<el-table-column prop="name" label="费用类别">
</el-table-column>
<el-table-column prop="address" label="费用金额">
</el-table-column>
<el-table-column prop="address" label="时间">
</el-table-column>
</el-table>
</div>
<span slot="footer" class="dialog-footer">
<div class="btnAll" ref="myref">
<el-button type="primary" @click="shownewManag.show = false" class="subfilg1">确定</el-button>
</div>
</span>
</el-dialog>
</div>
</template>
<script>
export default {
props: ["shownewManag"],

data() {
return {
value: 0,
xianshi: true,
xianshi1: false,
radio: "1",
listQuery: {},
form: {
name: ""
},
tableData: [],
sendList: {
pageIndex: 1,
pageSize: 20
}
};
},
methods: {},
created() {}
};
</script>
<style>
.shaixuan {
position: relative;
box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;
border-radius: 2px;
height: 344pt;
width: 550pt;
position: absolute;
top: 100px;
left: 0;
right: 0;
bottom: 0;
margin: auto;
}
.top {
margin-top: -50px;
}
.top1 {
margin-top: -50px;
margin-right: 550px;
}
.inlineBox {
width: 511pt;
height: 188pt;
padding: 20px 20px;
margin-left: 8px;
margin-top: 30px;
border: 1px solid #707070;
overflow-x: hidden;
overflow-y: auto;
}
.el-dialog__title {
margin-top: -10px;
}
.btnAll {
margin-top: 32px;
z-index: 10;
}
.sele {
position: absolute;
left: 25px;
}
</style>
