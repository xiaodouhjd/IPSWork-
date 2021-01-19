<template>
<div>
<el-dialog :title="shownewManag.title" :visible.sync="shownewManag.show" custom-class="shaixuan">
<div class="top">
<span>航班号：</span>
<span>CZ66525447</span>
</div>
<div class="inlineBox">
<el-table :data="tableData" style="width: 100%">
<el-table-column prop="date" label="运输状态">
</el-table-column>
<el-table-column prop="name" label="发生时间">
</el-table-column>
<el-table-column prop="address" label="发生地">
</el-table-column>
<el-table-column prop="address" label="条目">
</el-table-column>
<el-table-column prop="address" label="操作时间">
</el-table-column>
<el-table-column prop="address" label="操作人">
</el-table-column>
</el-table>
</div>
<span slot="footer" class="dialog-footer">
<div class="btnAll" ref="myref" v-show="xianshi">
<el-button type="primary" class="btnWhite" @click="delTrack">删除轨迹</el-button>
<el-button type="primary" class="btnWhite" @click="changeTrack">修改轨迹</el-button>
<el-button type="primary" @click="pop" class="subfilg1">新增轨迹</el-button>
</div>
<div class="seleCt" ref="myref1" v-show="xianshi1">
<div class="sele">
<el-select v-model="listQuery.region" placeholder="运单状态" class="filter-item">
<el-option label="正常" value="shanghai"></el-option>
<el-option label="非正常" value="beijing"></el-option>
</el-select>
</div>
<div>
<el-button type="primary" size="medium">提交</el-button>
<el-button type="primary" size="medium">删除</el-button>
</div>
</div>
</span>
</el-dialog>
</div>
</template>
<script>
import { deleteTrackNode, compileNode, addTrack } from "@/api/pickupGoods";
export default {
props: {
WaybillNos: {
type: Array,
default: () => []
}
},

data() {
return {
shownewManag: {
type: Boolean,
default: false
},
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
},
sendTrackNode: {
trk_id: 0,
tbs_id: 0,
track_code: "string",
track_occur_date: "2019-08-29T09:36:28.881Z",
track_area_description: "string",
track_create_date: "2019-08-29T09:36:28.881Z",
track_create_person: "string",
from_og_id: 0,
to_og_id: 0,
track_status: "string",
track_zw: "string",
track_yw: "string",
track_visible: "string",
track_updatetime: "2019-08-29T09:36:28.881Z",
track_manually_add: "string",
track_customer_sign: "string",
track_type: "string",
trajectoryStatusType: {
track_status: "string",
track_status_cnname: "string",
track_status_enname: "string"
},
trajectoryCode: {
track_code: "string",
track_cnname: "string",
track_enname: "string",
track_link: "string",
track_status: "string"
}
}
};
},
methods: {
pop() {
this.xianshi = !this.xianshi;
this.xianshi1 = !this.xianshi1;
addTrack().then(res => {
console.log(res);
});
},
delTrack() {
console.log(23232);
deleteTrackNode(this.value).then(res => {
console.log(res);
});
},
changeTrack() {
compileNode().then(res => {
console.log(res);
});
}
},
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
