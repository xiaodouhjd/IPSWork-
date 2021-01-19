<template>
  <div>
    <PageContainer>
      <template v-slot:aside>
        <nav-menu title="退仓管理" :list="navmenu" @click="change"></nav-menu>
      </template>
      <template v-slot:filter>
      </template>
      <template v-slot:table>
        <keep-alive>
          <component :is="comt"></component>
        </keep-alive>
      </template>
    </PageContainer>
  </div>
</template>

<script>
import cancelsalesapply from "./components/cancelsalesapply";
import cancelsalesUnderway from "./components/cancelsalesUnderway";
const navmenu = [
  { title: "退仓申请", path: "cancelsalesapply" },
  { title: "退仓中", path: "cancelsalesUnderway" },
  { title: "已退仓", path: "cancelsalesapply2" },
  { title: "所有退仓", path: "cancelsalesapply3" }
];
export default {
  name: "cancelsales",
  components: {
    cancelsalesapply,
    cancelsalesUnderway
  },
  data() {
    return {
      comt: "cancelsalesapply",
      navmenu: navmenu
    };
  },
  provide() {},
  methods: {
    change(item) {
      console.log(item.name);
      this.comt = item.name;
    }
  }
};
</script>

<style lang="scss" >
</style>
