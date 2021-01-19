<template>
  <div class="record">
    <div class="header">
      <el-avatar size="small" :src="circleUrl"></el-avatar>
      <div class="header-text">
        <div>{{nickName}}</div>
      </div>
    </div>
    <div class="joint">
      <div>{{explain}}</div>
    </div>
    <div class="date">
      <div v-if="joint.length > 0">
        同步信息:
        <span>
          <el-tag hit size="mini" v-for="item in joint" :key="item.label" :type="item.type" effect="plain">
            {{ item.label }}
          </el-tag>
        </span>
      </div>
      <div>
        {{datetime}}
      </div>
    </div>
    <el-divider />
  </div>
</template>

<script>
export default {
  name: "WorkOrderHandlerRecord",
  props: {
    record: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      size: "small",
      circleUrl:
        "http://thirdwx.qlogo.cn/mmopen/dqIMbXw4HyboKWUSB9S0k7jZ9yNLHeicAuEicCGic9EKZMyLPVXjD57icIU8pQpkBBeiasgWQfQshkrY80DWLMlnkVTR7fpF7s2Qk/132",
      nickName: "张三",
      explain: "能帮我查下4.19号我的货吗?",
      joint: [
        { type: "success", label: "微信" },
        { type: "info", label: "短信" },
        { type: "warning", label: "邮箱" }
      ],
      datetime: "2019-12-01 12:12:12"
    };
  },
  methods: {
    click() {}
  }
};
</script>
<style lang="scss" scoped>
.record {
  font-size: 14px;
}
.record > div {
  margin: 10px;
}
.header {
  display: flex;
  align-items: center;
  .header-text {
    margin-left: 10px;
  }
}
.joint {
  padding: 10px;
}
.date {
  span {
    margin-left: 5px;
  }
}
</style>