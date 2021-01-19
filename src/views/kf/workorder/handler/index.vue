<template>
  <div>
    <div class="card-container">
      <el-card class="box-card">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="工单信息" name="workorder">
            <WorkOrderInfo :info="workorderInfo" />
          </el-tab-pane>
          <el-tab-pane label="轨迹信息" name="trajectory">
            轨迹信息
          </el-tab-pane>
          <el-tab-pane label="订单信息" name="order">
            订单信息
          </el-tab-pane>
          <el-tab-pane label="客户信息" name="customer">
            客户信息
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
    <div class="card-container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div>处理记录</div>
          <div class="divider">
            <el-link :underline="false" :type="recordScoped== 'all'?linkType:null" @click="scopedHandler('all')">全部</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link :underline="false" :type="recordScoped== 'nal'?linkType:null" @click="scopedHandler('nal')">内部</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link :underline="false" :type="recordScoped== 'csi'?linkType:null" @click="scopedHandler('csi')">客户</el-link>
          </div>
        </div>
        <div>
          <WorkOrderHandlerRecordList :recordList="records"></WorkOrderHandlerRecordList>
        </div>
      </el-card>
    </div>
    <div class="card-container">
      <el-card class="box-card">
        <div slot="header" class="reply">
          <span>回复</span>
          <el-button type="primary" plain @click="createChat">创建会话</el-button>
        </div>
        <TextArea :context.sync="replyInfo.replyContent" :useWeChat.sync="replyInfo.useWeChat" :useEmail.sync="replyInfo.useEmail" :useSMS.sync="replyInfo.useSMS" :usePhone.sync="replyInfo.usePhone" :height="150" />
        <div class="submit">
              <el-button type="primary" @click="reply">回复</el-button>
              <el-button type="success" @click="done">完结工单</el-button>
           </div>
        </el-card>
      </div>
      <el-dialog
        title="客服工单"
        v-el-drag-dialog
        :visible.sync="chatShow"
        width="50%"
        custom-class="dlg"
        center>
        <el-divider></el-divider>
          <!-- <begin-chat :comt="WorkOrderHandlerRecordList"></begin-chat> -->
          <chat></chat>
      </el-dialog>
  </div>
</template>

<script>
import TextArea from '@/components/IPS/TextArea'
import WorkOrderHandlerRecord from '../components/WorkOrderHandlerRecord'
import WorkOrderInfo from '../components/WorkOrderInfo'
import WorkOrderHandlerRecordList from '../components/WorkOrderHandlerRecordList'
import { 
  GetWorkOrderByID,
  GetAllWorkOrderDetaileds,
  GetWorkOrderDetaileds,
  InsertWorkOrderDetailed
 } from '@/api/workorder'
const recordFormat = (data) =>{
  if(!data) []
  let setdata = new Set(data);
  setdata = new Set([...setdata].map(val => {
    let { internalMsg, userID, phoneNo, remark, replyContent, replyTime, useEmail, usePhone, useSMS, useSession, useWeChat, wodID, workID } = val
    let joint = []
    if(useWeChat) joint.push({ type: 'success', label: '微信'})
    if(useEmail) joint.push({ type: 'info', label: '邮箱'})
    if(useSMS) joint.push({ type: 'warning', label: '短信'})
    return {
        circleUrl:'',
        nickName: userID,
        explain: replyContent,
        joint,
        datetime: replyTime
      }
  }));
  return [...setdata]
}
const _replyInfo = () =>  {
  return {
      internalMsg: 0,
      useWeChat:0,
      useEmail:0,
      usePhone:0,
      useSMS:0,
      useSession:0,
      replyContent: ''
  }
}
export default {
  name: 'WorkOrderHandler',
  components: { 
    TextArea,
    WorkOrderInfo,
    WorkOrderHandlerRecord,
    WorkOrderHandlerRecordList
  },
  created() {
    let { workID } = this.$route.params
    this.WorkID = workID
    GetWorkOrderByID(workID).then(res=>{
      this.workorderInfo = res
    })
    this.getDataAllWorkOrderDetaileds()
  },
  data() {
    return {
        workorderInfo: {

        },
        WorkID: 0,
        replyInfo: _replyInfo(),
        activeName: 'workorder',
        recordScoped: 'all',
        chatShow: false,
        recordList: [],
        WorkOrderHandlerRecordList: WorkOrderHandlerRecordList
    }
  },
  computed:{
    linkType(){
      return 'success'
    },
    records() {
      return recordFormat(this.recordList)
    },
    InternalMsg() {
      return this.recordScoped == 'csi' ? false : true
    }
  },
  methods: {
    getDataAllWorkOrderDetaileds(){
      GetAllWorkOrderDetaileds(this.WorkID).then(res => {
        this.recordList = res
      })
    },
    getDataWorkOrderDetaileds(params){
      GetWorkOrderDetaileds(params).then(res=>{
        this.recordList = res
      })
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    reply() {
      if(!this.replyInfo.replyContent) {
        this.$message({
          message: '请输入内容',
          type: 'warning'
        })
        return
      }
      this.replyInfo.WorkID = this.WorkID
      InsertWorkOrderDetailed(this.replyInfo).then(res=>{
          this.replyInfo = _replyInfo()
          this.getDataAllWorkOrderDetaileds()
      })
    },
    done() {

    },
    scopedHandler(type){
      this.recordScoped = type;
      let params = {
        workID: this.WorkID,
        InternalMsg: this.InternalMsg
      }
      if(type === 'all') this.getDataAllWorkOrderDetaileds()
      else this.getDataWorkOrderDetaileds(params)
    },
    createChat(){
      this.chatShow = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.card-container{
  margin: 10px;
}
.clearfix{
  display: flex;
}
.reply{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.divider{
  margin-left:10px;
  font-size: 12px;
}
.submit{
  margin:20px auto 30px;
  display:flex;
  justify-content: space-between;
}
</style>
<style>
.dlg.el-dialog--center .el-dialog__body{
  padding:0;
}
</style>
