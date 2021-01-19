<template>
  <div>
    <el-table :key="i_tableKey" v-loading="i_loading" :data="data" fit highlight-current-row style="width: 100%;" @sort-change="sortChange">
      <el-table-column type="index" width="35" :show-overflow-tooltip="true" :index="indexMethod" />
      <el-table-column type="selection" class-name="check" width="35">
      </el-table-column>
      <el-table-column v-for="(item,index) in columns" v-if="item.showReviewer || true" :type="item.type" :index="item.index" :column-key="item.columnKey" :label="item.label" :prop="item.prop" :width="item.width" :min-width="item.minWidth" :fixed="item.fixed" :render-header="item.renderHeader" :sortable="item.sortable" :sort-method="item.sortMethod" :sort-by="item.sortBy" :sort-orders="item.sortOrders" :resizable="item.resizable" :formatter="formatter" :show-overflow-tooltip="item.showOverflowTooltip" :align="item.align" :header-align="item.headerAlign" :class-name="item.className" :label-class-name="item.labelClassName" :selectable="item.selectable" :reserve-selection="item.reserveSelection" :filters="item.filters" :filter-placement="item.filterPlacement" :filter-multiple="item.filterMultiple" :filter-method="item.filterMethod" :filtered-value="item.filteredValue">
        <template slot-scope="scope">
          <component v-if="item.scoped" :is="item.scoped" :scope="scope"></component>
          <div v-else>{{scope.row[`${scope.column.property}`]}}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <el-button @click="richeng = true">日程安排</el-button>
        <el-dialog title="安排日程" :visible.sync="richeng" width="30%" custom-class="richeng">
          <div>
            <span>出库日期</span>
            <span class="date">2019/7/16 <span class="houer">17:00:00</span></span>
          </div>

          <span slot="footer" class="dialog-footer">
            <el-button @click="richeng = false">取 消</el-button>
            <el-button type="primary" @click="richeng = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-table-column>
    </el-table>
    <div class="tool">
      <div class="tool-btn">
        <div class="export">
          <el-tooltip content="导出" placement="top">
            <svg-icon icon-class="excel" />
          </el-tooltip>
        </div>
        <div class="setting">
          <el-tooltip content="设置" placement="top">
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
        <pagination v-show="total>0" :total="total" :page.sync="i_page" :limit.sync="limit" @pagination="getList" />
      </div>
    </div>
  </div>
</template>

<script>
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

export default {
  name: "Table",
  components: {
    Pagination
  },
  directives: { waves },
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
      default: 1
    },
    sort: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  filters: {},
  data() {
    return {
      richeng: false,
      i_tableKey: this.tableKey,
      i_page: this.page,
      i_loading: this.loading
    };
  },
  created() {
    this.getList();
  },
  methods: {
    indexMethod(index) {
      return index++;
    },
    formatter(row, column) {
      console.log(column);
      return column.formatter && column.formatter(row, column);
    },
    getList() {
      this.i_loading = true;
      setTimeout(() => {
        this.i_loading = false;
      }, 3000);
      this.i_loading = true;
      setTimeout(() => {
        this.i_loading = false;
      }, 3000);

      this.i_loading = true;
      setTimeout(() => {
        this.i_loading = false;
      }, 1000);
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    sortChange(data) {},
    handleDelete(row) {
      this.$notify({
        title: "Success",
        message: "Delete Successfully",
        type: "success",
        duration: 2000
      });
      const index = this.list.indexOf(row);
      this.list.splice(index, 1);
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData;
        this.dialogPvVisible = true;
      });
    },
    handleDownload() {
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then(excel => {
        const tHeader = ["timestamp", "title", "type", "importance", "status"];
        const filterVal = [
          "timestamp",
          "title",
          "type",
          "importance",
          "status"
        ];
        const data = this.formatJson(filterVal, this.list);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: "table-list"
        });
        this.downloadLoading = false;
      });
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
.richeng {
  width: 407px;
  height: 370px;
}
.date {
  margin-left: 20px;
}
.houer {
  margin-left: 15px;
}
</style>