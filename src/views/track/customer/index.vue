<template>
  <div>
    <PageContainer>
      <template v-slot:aside>
      </template>
      <template v-slot:filter>
        <find></find>
      </template>
      <template v-slot:tool>
        <el-button size="mini" round @click="day">日志</el-button>
        <el-button size="mini" round @click="sign">签收</el-button>
        <div class="btn_right">
          <el-button size="mini" round>下载发票</el-button>
        </div>
      </template>
      <template v-slot:table>
        <Table :data="trackData.tableData" multiselect key="" :columns="tableColumns" :loading="loading" :page="trackData.pageIndex" :limit="trackData.pageSize" :total="trackData.total" @changePage="changePage" @selectRow="selectRow"></Table>
      </template>
    </PageContainer>
    <hk-About :shownewManag="shownewManag" :WaybillNos="WaybillNos"></hk-About>
  </div>
</template>
<script>
import Find from "./components/Find";
import PageContainer from "@/components/IPS/PageContainer";
import WorkOrderState from "./components/WorkOrderState";
import hkAbout from "@/components/IPS/Hkabout/Habout";
import {
  getTrack,
  getTrackStatu,
  getSign,
  getTrackNode,
  getBillTrackNode,
  compileNode
} from "@/api/pickupGoods";
import { constants } from "crypto";
const ConstColumns = [
  {
    label: "状态",
    prop: "track_status"
  },
  {
    label: "运单号",
    prop: "shipper_hawbcode"
  },
  {
    label: "倒库时间",
    prop: "create_date"
  },
  {
    label: "产品",
    prop: ""
  },
  {
    label: "渠道",
    prop: "channel_hawbcode"
  },
  {
    label: "已用时",
    prop: ""
  },
  {
    label: "完成时间",
    prop: "close_date"
  },
  {
    label: "总用时",
    prop: ""
  },
  {
    label: "运单状态",
    prop: ""
  }
];
export default {
  name: "dispatch",
  components: {
    PageContainer,
    Find,
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
      trackData: {
        tableData: [],
        pageIndex: 0,
        pageSize: 0,
        total: 0
      },
      sendTrackData: {
        pageSize: 20,
        pageIndex: 1
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
    getStatus() {
      getTrackStatu().then(res => {
        console.log(res);
      });
    },
    getTrackList() {
      getTrack().then(res => {
        console.log(res);
        this.trackData.tableData = res.DataList;
        let trackNum = this.trackData.tableData.length;
        this.trackData.total = trackNum;
      });
    },
    TrackNode() {
      getTrackNode().then(res => {
        // console.log(res);
      });
    },
    billTrackNode() {
      getBillTrackNode().then(res => {
        // console.log(res);
      });
    },
    getCompileNode() {
      compileNode().then(res => {
        // console.log(res);
      });
    },

    onSubmit() {},
    remoteMethod() {},
    changePage(val) {
      let { limit, page } = val;
      this.sendTrackData.pageIndex = page;
      this.sendTrackData.pageSize = limit;
      this.getTrackList();
    },
    selectRow(selectData) {
      this.selectRowData = selectData;
    },
    sign() {
      getSign().then(res => {
        console.log(res);
      });
    },
    day() {
      this.shownewManag.show = !this.shownewManag.show;
    }
  },
  created() {
    this.getTrackList();
    this.getStatus();
    this.TrackNode();
    this.billTrackNode();
    this.getCompileNode();
    this.$center.$on("find-data", sendList => {
      this.trackData.tableData = sendList;
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
