<template>
  <el-select v-model="selectVal" clearable filterable :placeholder="placeholder" class="select-customer">
    <el-option v-for="item in options" :key="item.ServerChannelCode" :label="item.Name_CN" :value="item.ServerChannelCode">
    </el-option>
  </el-select>
</template>

<script>
import { getgoal } from "@/api/basis";
export default {
  name: "goal",
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    placeholder: {
      type: String,
      default: ""
    },
    selectKey: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      list: []
    };
  },
  computed: {
    selectVal: {
      get() {
        return this.value || "";
      },
      set(val) {
        this.$emit("update:value", val);
      }
    },
    options() {
      return this.list;
    }
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.list = await getgoal();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
