<template>
  <div>
    <el-button type="text">查看电子发票</el-button>
  </div>
</template>

<script>
export default {
  name: "order",
  scope: {
    type: Object,
    default: () => {}
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.icon {
  color: #1890ff;
  margin-right: 2px;
}
</style>
