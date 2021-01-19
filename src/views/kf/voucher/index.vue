<template>
  <div>
      <PageContainer>
          <template  v-slot:filter>
            <div class="filter-container">
              <el-input v-model="find.title" placeholder="运单号" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
              <Select select-key="" :value="state" class="filter-item"></Select>
              <el-date-picker class="filter-item"
                v-model="find.date"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
              <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
                查找
              </el-button>
            </div>
          </template >
          <template  v-slot:table> 
             <Table />
          </template>
      </PageContainer>
  </div>
</template>

<script>
export default {
  components: { 
    
  },
  data() {
    return {
        find:{
          state:''
        }
    }
  },
  computed:{
    
  },
  provide() {
    
  },
  methods: {
    change(item){
      this.comt = item.name
    },
    handleFilter(){

    }
  }
}
</script>
