<template>
  <div>
    <div ref="myref" v-show="xianshi">
      <el-dialog :title="show.title" :visible.sync="show" custom-class="createOrder">
        <div class="order_top" v-show="xianshi">
          <p class="chukuSet">出库设置</p>
          <el-row :gutter="10">
            <el-col :span="8">
              <div class="demo-input-suffix">
                <div class="demo-input-suffix">
                  <span class="title left">出库时间：</span>
                  <el-date-picker v-model="value1" type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="demo-input-suffix right">
                <div class="demo-input-suffix">
                  <span class="title">结束时间：</span>
                  <el-input placeholder="" class="endTime" ref="myref" v-model="input.TaskEndTime"></el-input>
                  </el-input>
                </div>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="demo-input-suffix">
                <div class="demo-input-suffix xiayizhan">
                  <span class="title xiayizhanT">执行人：</span>
                  <el-input placeholder="" class="nextZ" ref="myref" v-model="input.OutName">
                  </el-input>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="7">
              <div>
                <div class="demo-input-suffix zhixin">
                  <span class="title person1">下一站：</span>
                  <Next select-key="Branch" :value.sync="selectBranchValue" placeholder="下一站" />
                </div>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="order_bto" v-show="xianshi">
          <p class="chukuSet">交货设置</p>
          <el-row :gutter="10">
            <el-col :span="8">
              <div class="demo-input-suffix">
                <div class="demo-input-suffix">
                  <span class="title left">交货时间：</span>
                  <el-date-picker type="date" placeholder="选择日期" class="chukuTime">
                  </el-date-picker>
                </div>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="demo-input-suffix right">
                <div class="demo-input-suffix">
                  <span class="title">交货供应商：</span>
                  <goal select-key="goal" :value.sync="selectGoalValue" placeholder="目的地" />
                </div>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="demo-input-suffix">
                <div class="demo-input-suffix xiayizhan">
                  <span class="title xiayizhanT">联系人：</span>
                  <el-input placeholder="" class="nextZ" ref="myref" v-model="input.OutName">
                  </el-input>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="7">
              <div>
                <div class="demo-input-suffix zhixin">
                  <span class="title person1">交货地址：</span>
                  <el-input placeholder="" class="person" ref="myref" v-model="input.ToAddress">
                  </el-input>
                </div>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
              </div>
            </el-col>
          </el-row>
          <el-button type="primary" class="btnX" @click="next">下一步</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
  </div>
</template>
<script>
import { createOrder, branch, baseApi } from "@/api/dispatch";
import Next from "@/components/IPS/nextstation/next";
import goal from "@/components/IPS/nextstation/toaddress";
export default {
  components: {
    Next,
    goal
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    WaybillNos: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      branch: "",
      selectBranchValue: "",
      selectGoalValue: "",
      base: "",
      input: {
        TaskStartTime: "2019-09-02T06:15:01.911Z",
        TaskEndTime: "2019-09-02T06:15:01.911Z",
        OutName: null,
        ToAddress: null,
        ToTime: "2019-09-02T06:15:01.911Z",
        ToTel: null,
        TargetBranchCode: "1",
        ServerChannelCode: "ALQ"
      },
      xianshi: true,
      xianshi1: false,
      radio: "1",
      open: false,
      form: {
        name: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  },
  computed: {
    fromData() {
      return { ...this.input, ...{ WaybillNos: this.WaybillNos } };
    }
  },
  methods: {
    next() {
      this.xianshi = !this.xianshi;
      this.$emit("cp3", {
        onshow: false,
        didshow: true
      });
      createOrder(this.fromData).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    branch().then(res => {
      this.branch = res[0].BranchCode;
    });

    baseApi().then(res => {
      console.log(res);
      this.base = res[2].ServerChannelCode;
    });
  }
};
</script>
<style lang="scss">
.createOrder {
  width: 785px;
  height: 542px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -230pt);
  display: flex;
}
.btnX {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>
