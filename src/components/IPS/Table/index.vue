<template>
<div>
<el-table :key="tableKey" v-loading="loading" :data="data" ref="multipleTable" border fit row-class-name="row_class" cell-class-name="cell_class" highlight-current-row style="width: 100%;font-size: 9px" @sort-change="sortChange" @select="selectRow" @select-all="selectAllRow" @selection-change="selectRow" id="tableId">
<el-table-column type="index" v-if="index" width="35" :show-overflow-tooltip="true" :index="indexMethod" />
<el-table-column type="selection" v-if="multiselect" class-name="check" width="35">
</el-table-column>
<el-table-column v-for="(item,index) in columns" :key="item.prop" v-if="item.showReviewer || true" :type="item.type" :index="item.index" :column-key="item.columnKey" :label="item.label" :prop="item.prop" :width="item.width" :min-width="item.minWidth" :fixed="item.fixed" :render-header="item.renderHeader" :sortable="item.sortable" :sort-method="item.sortMethod" :sort-by="item.sortBy" :sort-orders="item.sortOrders" :resizable="item.resizable" :formatter="item.formatter" :show-overflow-tooltip="item.showOverflowTooltip" :align="item.align" :header-align="item.headerAlign" :class-name="item.className" :label-class-name="item.labelClassName" :selectable="item.selectable" :reserve-selection="item.reserveSelection" :filters="item.filters" :filter-placement="item.filterPlacement" :filter-multiple="item.filterMultiple" :filter-method="item.filterMethod" :filtered-value="item.filteredValue">
<template slot-scope="scope">
<component v-if="item.scoped" :is="item.scoped" :scope="scope" :formatter="item.formatter"></component>
<div v-else>{{scope.row[`${scope.column.property}`]}}</div>
</template>
</el-table-column>
</el-table>
<div class="tool">
<div class="tool-btn">
<div class="export">
<el-tooltip content="导出" placement="top">
<svg-icon icon-class="excel" @click="exportExcel" />
</el-tooltip>
</div>
<div class="setting">
<el-tooltip content="设置" placement="top" @click="handleDownload">
<i class="el-icon-setting" />
</el-tooltip>
</div>
<div class="refresh">
<el-tooltip content="刷新" placement="top">
<i class="el-icon-refresh" />
</el-tooltip>
</div>
</div>
<div class="page">
<pagination :total="total" :page.sync="currentPage" :limit.sync="pageSize" @pagination="pagination" />
</div>
</div>
</div>
</template>
<script>
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination";
import FileSaver from "file-saver";
import XLSX from "xlsx";

export default {
name: "Table",
components: {
Pagination
},
props: {
tableKey: {
type: String,
default: ""
},
columns: {
type: Array,
default: () => []
},
data: {
type: Array,
default: () => []
},
page: {
type: Number,
default: 0
},
limit: {
type: Number,
default: 0
},
total: {
type: Number,
default: 0
},
sort: {
type: String,
default: ""
},
loading: {
type: Boolean,
default: true
},
index: {
type: Boolean,
default: false
},
multiselect: {
type: Boolean,
default: false
}
},
filters: {},
data() {
return {};
},
created() {},
computed: {
currentPage: {
get() {
return this.page;
},
set(val) {
this.$emit("update:page", val);
}
},
pageSize: {
get() {
return this.limit;
},
set(val) {
this.$emit("update:limit", val);
}
}
},
methods: {
indexMethod(index) {
return index++;
},
pagination(page) {
console.log(page);
this.$emit("changePage", page);
},
sortChange(data) {},
selectRow() {
this.$emit("selectRow", this.$refs.multipleTable.selection);
},
selectAllRow() {
this.$emit("selectAllRow", this.data);
},
handleDownload() {
debugger;
import("@/vendor/Export2Excel").then(excel => {
const tHeader = ["timestamp", "title", "type", "importance", "status"];
const filterVal = ["timestamp", "title", "type", "importance", "status"];
const data = this.formatJson(filterVal, this.list);
excel.export_json_to_excel({
header: tHeader,
data,
filename: "table-list"
});
});
},
exportExcel() {
var wb = XLSX.utils.table_to_book(document.querySelector("#tableId"));
var wbout = XLSX.write(wb, {
bookType: "xlsx",
bookSST: true,
type: "array"
});
try {
FileSaver.saveAs(
new Blob([wbout], { type: "application/octet-stream" }),
`${tableKey}.xlsx`
);
} catch (e) {
if (typeof console !== "undefined") console.log(e, wbout);
}
return wbout;
}
}
};
</script>
<style lang="scss">
.el-table--enable-row-hover .el-table__body tr:hover > td {
background-color: #fff !important;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.16);
}

.el-table th.is-leaf {
background-color: rgba(239, 245, 249, 1);
}

.pagination-container {
padding: 0 !important;
margin-top: 10px !important;
}

.tool {
display: flex;
justify-content: space-between;
}

.tool-btn {
margin-top: 10px !important;
display: flex;
align-content: center;
}

.tool-btn > div {
margin: 5px;
padding: 5px;
cursor: pointer;
background-color: #1890ff;
color: #ffffff;
}
.row_class .cell_class {
padding: 6px 0;
}
</style>
