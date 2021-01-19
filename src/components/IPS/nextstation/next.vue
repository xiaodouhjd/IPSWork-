<template>
  <el-select v-model="selectVal" clearable filterable :placeholder="placeholder" class="select-customer">
    <el-option v-for="item in options" :key="item.BranchCode" :label="item.BranchName" :value="item.BranchCode">
    </el-option>
  </el-select>
</template>

<script>
import { getBranch } from "@/api/basis";
export default {
  name: "Next",
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
      this.list = await getBranch();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
