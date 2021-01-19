<template>
  <div>
    <div class="tool">
      <div class="btn">
        <slot name="tool">
          <svg-icon class-name="i-icon" icon-class="phone" />
          <svg-icon class-name="i-icon" icon-class="wenjianjia" />
        </slot>
      </div>
      <div class="joint">
        <slot name="joint">
          <div class="joint-container">
            <el-link :underline="false">信息同步</el-link>
          </div>
          <div class="joint-container">
              <el-checkbox  v-model="n_useWeChat">微信</el-checkbox>
              <el-checkbox  v-model="n_useSMS">短信</el-checkbox>
              <el-checkbox  v-model="n_useEmail">邮箱</el-checkbox>
          </div>
          <div class="joint-container">
            <el-popover
              placement="bottom"
              width="300"
              trigger="click">
              <ul class="fastreply">
                <li v-for="i in fastreply" class="fastreply-item">
                  <el-link slot="reference" :underline="false">{{ i }}</el-link>
                </li>
              </ul>
              <el-link slot="reference" :underline="false">快捷回复<i class="el-icon-arrow-down" /></el-link>
            </el-popover>
          </div>
        </slot>
      </div>
    </div>
    <el-input type="textarea" placeholder="请输入内容" v-model="replyContent" maxlength="200" :rows="10" show-word-limit clearable size="medium" autocomplete="on" resize="none">
    </el-input>
  </div>
</template>
<script>
 const fastreplyOptions = [
 '您好! 正在为您处理,请稍候...',
 '您好! 正在为您处理',
 '您好! 正在为您处理',
 '您好! 正在为您处理'
 ]
export default {
  name: 'TextArea',
  props:{
    context:{
      type: String,
      default: ``
    },
    useWeChat:{
      type: Number,
      required : true
    },
    useEmail:{
      type: Number,
      default: 0
    },
    usePhone:{
      type: Number,
      default: 0
    },
    useSMS:{
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      fastreply: fastreplyOptions,
    }
  },
  computed:{
    replyContent:{
      get(){
        return this.context
      },
      set(val){
        this.$emit('update:context', val)
      }
    },
    n_useWeChat:{
      get() {
        return this.useWeChat ? true : false
      },
      set(val){
        this.$emit('update:useWeChat', (val?1:0))
      }
    },
    n_useEmail:{
      get() {
        return this.useEmail ? true : false
      },
      set(val){
        this.$emit('update:useEmail', (val?1:0))
      }
    },
    n_usePhone:{
     get() {
        return this.usePhone ? true : false
      },
      set(val){
        this.$emit('update:usePhone', (val?1:0))
      }
    },
    n_useSMS:{
     get() {
        return this.useSMS ? true : false
      },
      set(val){
        this.$emit('update:useSMS', (val?1:0))
      }
    },
  },
  methods: {
    
  }
}

</script>
<style lang="scss" scoped>
.tool {
  height: 50px;
  border: 1px solid #C0C4CC;
  border-bottom: 0px;
  padding-bottom: 10px;
  margin-bottom: -10px;
  display: flex;
  align-items: center;
  .btn
  {
    
  }
}

.i-icon {
  width: 20px;
  height: 25px;
  margin: 0 5px;
  cursor: pointer;
}
.joint{
  display: flex;
}
.joint-container
{
  margin:5px;
}
.fastreply{
  list-style: none;
  padding-inline-start: 0px;
  .fastreply-item{
      margin: 5px auto;
  }
}
</style>
