<template>
  <div>
    <el-container class="container">
        <slot name="aside"></slot>
        <el-container>
            <el-header height="auto">
              <div style="padding-top:20px;">
                  <slot name="filter"></slot>
              </div>
              <slot name="tool"></slot>
            </el-header>
          <el-main>
              <slot name="table"></slot>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'PageContainer',
  data() {
    return {
        
    }
  }
}
</script>

<style lang="scss" >
.container{
  min-height: calc(100vh - 84px);
}
</style>
