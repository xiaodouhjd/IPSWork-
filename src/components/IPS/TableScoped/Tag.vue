<template>
  <div>
    <el-tag
      :type="type"
      :effect="effect">
      {{state}}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: 'TableScopedTag',
  props:{
    scope:{
      type: Object,
      default:() =>{}
    },
    formatter:{
      type: Function,
      required: true
    }
  },
  data() {
    return {
      type: 'info',
      effect: 'plain'
    }
  },
  computed:{
    state(){
      let { type, effect, text } = this.formatter(this.scope.row)
      this.type = type
      this.effect = effect
      return text;
    }
  },
  methods:{
   
  }
}
</script>