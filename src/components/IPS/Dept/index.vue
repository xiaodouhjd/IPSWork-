<template>
    <div>
      <div class="dept">
         <el-input
            size="small"
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :filter-node-method="filterNode"
            :expand-on-click-node="false"
            ref="tree">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span class="label">{{ data.deptname }}</span>
            </span>
          </el-tree>
      </div>
    </div>
</template>

<script>
const deptOtpions = [
  { 
    id: 1,
    deptname: '总经理(1人)',
    children:[
      {
        id: 6,
        deptname: '张三'
      }
    ]
  },
  { 
    id: 2,
    deptname: '信息部(5人)',
    children:[
      {
        id: 7,
        deptname: '李四'
      },{
        id: 5,
        deptname: '王五'
      }
    ]
  },
  { 
    id: 3,
    deptname: '市场部(9人)'
  },
  { 
    id: 4,
    deptname: '行政人事(5人)'
  },
  { 
    id: 5,
    deptname: '运营部(50人)'
  }
]
export default {
  name: 'Dept',
  props: {
    
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      filterText: '',
      data: deptOtpions,
      defaultProps: {
        children: 'children',
        label: 'deptname'
      }
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.deptname.indexOf(value) !== -1;
    },
  }
}
</script>

<style lang="scss" scoped>
  .filter-tree
  {

  }
  .label{
    margin-left: 15px;
  }

</style>
<style>
    /* .tree-icon{
      background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdD0iMTU2NTM0MTE2NTA5MyIgcC1pZD0iMTMxNiIgdmVyc2lvbj0iMS4xIiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4Ljc3ODEwNjkuMC5pMiI+PHBhdGggZD0iTSA4MTcuNzY2IDQ3Ny40OTEgbCAwIC05MC42MjQgYyAwIC0xNi4xMDc1IC0xMy4wNDU4IC0yOS4xNjM1IC0yOS4xNjM1IC0yOS4xNjM1IEwgNzg3LjA0NiAzNTcuNzA0IGwgMCAtNzEuNzcyMiBjIDAgLTI0Ljc3MDYgLTIwLjE1MjMgLTQ0LjkyMjkgLTQ0LjkzMzEgLTQ0LjkyMjkgTCAzNDkuNzQ3IDI0MS4wMDkgbCAtMjkuMTEyMyAtNzYuNDEwOSBjIC0zLjA0MTI4IC03LjkzNiAtMTAuNjM5NCAtMTMuMTg5MSAtMTkuMTM4NiAtMTMuMTg5MSBMIDE0MS44MDQgMTUxLjQwOSBjIC01LjQ1NzkyIDAgLTEwLjY4MDMgMi4xNzA4OCAtMTQuNTMwNiA2LjA0MTYgYyAtMy44NCAzLjg3MDcyIC01Ljk5MDQgOS4xMDMzNiAtNS45NDk0NCAxNC41NjEzIGwgMC4xMjI4OCAxMTMuOTIgbCAwIDM4NS42NTkgYyAwIDI0Ljc3MDYgMjAuMTYyNiA0NC45MjI5IDQ0LjkyMjkgNDQuOTIyOSBsIDI3Ny41ODYgMCBMIDQ0My45NTUgNTMyLjQ2IGMgMCAtMzAuMzEwNCAyNC42NTc5IC01NC45NjgzIDU0Ljk2ODMgLTU0Ljk2ODMgTCA4MTcuNzY2IDQ3Ny40OTEgWiBNIDIzNy44NzUgMzU3LjcxNCBjIC0xNi4xMDc1IDAgLTI5LjE2MzUgMTMuMDQ1OCAtMjkuMTYzNSAyOS4xNjM1IGwgMCAyODguNjg2IGwgLTQyLjM2MjkgMCBjIC0yLjE4MTEyIDAgLTMuOTYyODggLTEuNzgxNzYgLTMuOTYyODggLTMuOTYyODggTCAxNjIuMzg2IDI4NS44MTkgbCAtMC4yNjYyNCAtOTMuNDQgbCAxMjUuMjQ1IDAgbCAyOS4xMjI2IDc2LjQxMDkgYyAzLjAyMDggNy45MzYgMTAuNjM5NCAxMy4xODkxIDE5LjEzODYgMTMuMTg5MSBsIDQwNi40NzcgMCBjIDIuMTkxMzYgMCAzLjk3MzEyIDEuNzgxNzYgMy45NzMxMiAzLjk2Mjg4IGwgMCA3MS43NzIyIEwgMjM3Ljg3NSAzNTcuNzE0IFogTSA4NzMuMjk4IDUwMC41MzEgTCA1MDQuMDQ0IDUwMC41MzEgYyAtMTYuMTg5NCAwIC0yOS4zNjgzIDEzLjE3ODkgLTI5LjM2ODMgMjkuMzY4MyBsIDAgMzEzLjMxMyBjIDAgMTYuMTk5NyAxMy4xNzg5IDI5LjM3ODYgMjkuMzY4MyAyOS4zNzg2IGwgMzY5LjI2NSAwIGMgMTYuMTg5NCAwIDI5LjM2ODMgLTEzLjE3ODkgMjkuMzY4MyAtMjkuMzc4NiBMIDkwMi42NzYgNTI5LjkgQyA5MDIuNjY2IDUxMy43MSA4ODkuNDg3IDUwMC41MzEgODczLjI5OCA1MDAuNTMxIFogTSA4MzkuMDI1IDUyNS4xODkgYyA4LjM5NjggMCAxNS4yMDY0IDYuODA5NiAxNS4yMDY0IDE1LjIwNjQgYyAwIDguMzk2OCAtNi44MDk2IDE1LjIwNjQgLTE1LjIwNjQgMTUuMjA2NCBjIC04LjM4NjU2IDAgLTE1LjIwNjQgLTYuODA5NiAtMTUuMjA2NCAtMTUuMjA2NCBDIDgyMy44MDggNTMxLjk4OCA4MzAuNjI4IDUyNS4xODkgODM5LjAyNSA1MjUuMTg5IFogTSA3NzcuOTk0IDUyNC4zNDkgYyA4LjM5NjggMCAxNS4yMDY0IDYuODA5NiAxNS4yMDY0IDE1LjIwNjQgYyAwIDguNDA3MDQgLTYuODA5NiAxNS4yMDY0IC0xNS4yMDY0IDE1LjIwNjQgYyAtOC4zODY1NiAwIC0xNS4yMDY0IC02LjgwOTYgLTE1LjIwNjQgLTE1LjIwNjQgQyA3NjIuNzc4IDUzMS4xNTkgNzY5LjU5NyA1MjQuMzQ5IDc3Ny45OTQgNTI0LjM0OSBaIE0gODc3LjQ4NiA4NDMuMjEzIGMgMCAyLjMyNDQ4IC0xLjg4NDE2IDQuMTk4NCAtNC4xODgxNiA0LjE5ODQgTCA1MDQuMDQ0IDg0Ny40MTEgYyAtMi4zMTQyNCAwIC00LjE4ODE2IC0xLjg4NDE2IC00LjE4ODE2IC00LjE5ODQgTCA0OTkuODU1IDU3My45NjIgbCAzNzcuNjQxIDAgTCA4NzcuNDk2IDg0My4yMTMgWiIgcC1pZD0iMTMxNyIgLz48L3N2Zz4=') no-repeat center;
      width: 41px;
      height: 30px;
      background-size: contain;
  } */
</style>
