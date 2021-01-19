<template>
  <div class="invocie-container">
    <el-card class="box-card">
      <div slot="header" class="nav-box">
        <span class="nav" :class="navClass">
          <el-link type="primary" :underline="false" @click="pdfshow = !pdfshow"><i class="el-icon-d-arrow-right" /></el-link>
        </span>
      </div>
      <div class="pdf-wrap" v-show="pdfshow">
        <object :data="pdfpath" type="application/pdf" width="100%" height="100%"></object>
      </div>
    </el-card>
    <el-form :model="Sender" :rules="rules" ref="Sender" label-width="100px">
    <el-card class="box-card">
        <div slot="header" class="srinfo">
          <span>发件人信息</span>
          <span>收件人信息</span>
        </div>
        <el-row :gutter="24">
        <el-col :span="10">
          <div class="sender">
              <el-form-item prop="name" label-width="0" >
                <el-row :gutter="2">
                  <el-col :span="12">
                    <el-input v-model="Sender.name"></el-input>
                  </el-col>
                  <el-col :span="12">
                    <el-input v-model="Sender.name"></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item prop="name" label-width="0" >
                <el-input v-model="Sender.name"></el-input>
              </el-form-item>
              <el-form-item prop="name" label-width="0">
                <el-input v-model="Sender.name"></el-input>
              </el-form-item>
              <el-form-item prop="name" label-width="0">
                <el-input v-model="Sender.name"></el-input>
              </el-form-item>
              <el-form-item prop="name" label-width="0">
                <el-input v-model="Sender.name"></el-input>
              </el-form-item>
              <el-form-item prop="name" label-width="0">
                <el-input v-model="Sender.name"></el-input>
              </el-form-item>
              <el-form-item prop="name" label-width="0">
                <el-input v-model="Sender.name"></el-input>
              </el-form-item>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="label">
            <el-form :model="Sender" :rules="rules" ref="Sender" label-width="auto">
              <el-form-item prop="name" label="电话/手机" required class="label">
              </el-form-item>
              <el-form-item label="公是名称" prop="region"   class="label">
              </el-form-item>
              <el-form-item label="证件号码" required   class="label">
              </el-form-item>
              <el-form-item label="街道/街道" prop="delivery"   class="label">
              </el-form-item>
              <el-form-item label="邮编/城市" prop="type"   class="label">
              </el-form-item>
              <el-form-item label="州州/省省" prop="resource"   class="label">
              </el-form-item>
              <el-form-item label="国家/国家" prop="desc"   class="label">
              </el-form-item>
            </el-form>
          </div>
        </el-col>
       <el-col :span="10">
          <div class="Receiver">
              <el-form-item prop="name" label-width="0">
                <el-input v-model="Sender.name"></el-input>
              </el-form-item>
              <el-form-item prop="name" label-width="0">
                <el-input v-model="Sender.name"></el-input>
              </el-form-item>
              <el-form-item prop="name" label-width="0">
                <el-input v-model="Sender.name"></el-input>
              </el-form-item>
              <el-form-item prop="name" label-width="0">
                <el-input v-model="Sender.name"></el-input>
              </el-form-item>
              <el-form-item prop="name" label-width="0">
                <el-input v-model="Sender.name"></el-input>
              </el-form-item>
              <el-form-item prop="name" label-width="0">
                <el-input v-model="Sender.name"></el-input>
              </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
       <div slot="header" class="srinfo">
          <span>发票</span>
          <span>发票总额(USD):{{invoiceTotalVaule}}</span>
       </div>
       <div>
         <el-row :gutter="5" v-for="item in Sender.invoice">
            <el-col :span="2">
              <el-input
                placeholder="数量"
                v-model="item.num"
                clearable>
              </el-input>
            </el-col>
            <el-col :span="2">
              <el-input
                placeholder="单重"
                v-model="item.num"
                clearable>
              </el-input>
            </el-col>
            <el-col :span="2">
                <el-select v-model="item.unit" placeholder="单位">
                  <el-option
                    v-for="item in [{label:'件',value:'1'},{label:'票',value:'2'},{label:'条',value:'3'}]"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </el-col>
            <el-col :span="2">
              <el-input
                placeholder="单价"
                v-model="item.num"
                clearable>
              </el-input>
            </el-col>
            <el-col :span="3">
              <el-input
                  placeholder="中文品名"
                  v-model="item.num"
                  clearable>
                </el-input>
            </el-col>
            <el-col :span="3">
              <el-input
                  placeholder="英文品名"
                  v-model="item.num"
                  clearable>
                </el-input>
            </el-col>
            <el-col :span="2">
              <el-input
                  placeholder="海关编码"
                  v-model="item.num"
                  clearable>
                </el-input>
            </el-col>
            <el-col :span="2">
               <el-select v-model="item.cz" placeholder="材质">
                  <el-option
                    v-for="item in [{label:'钢筋',value:'1'},{label:'塑料',value:'2'},{label:'木制品',value:'3'}]"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </el-col>
            <el-col :span="2">
                <el-input
                  placeholder="规格"
                  v-model="item.num"
                  clearable>
                </el-input>
            </el-col>
            <el-col :span="2">
                <el-input
                  placeholder="用途"
                  v-model="item.num"
                  clearable>
                </el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" icon="el-icon-plus" size="small" circle></el-button>
                <el-button icon="el-icon-minus" size="small" circle></el-button>
            </el-col>  
          </el-row>
       </div>
    </el-card>
    <div class="submit-box">
      <el-row :gutter="20">
        <el-col :span="10" :offset="9">
          <el-button type="primary" @click="submitForm('Sender')">提交</el-button>
          <el-button type="primary" @click="submitForm('Sender')">打印设置</el-button>
          <el-button type="primary" @click="submitForm('Sender')">打印标签</el-button>
          <el-button @click="resetForm('Sender')">重置</el-button>
        </el-col>
      </el-row>
    </div>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      pdfpath: 't.pdf',
      pdfshow: true,
      Sender: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        invoice:[{

        }]
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    navClass(){
      return this.pdfshow? ['nav-open'] : ['nav-close']
    },
    invoiceTotalVaule(){
      return 0;
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>
<style lang="scss" scoped>
.invocie-container{
  padding: 10px 15px;
  margin-bottom: 50px;
}
.invoice-diglog{
  display: none;
}
.nav-box{
  text-align: center;
  .nav{
    display: inline-block;
  }
}
.nav-open{
  transform: rotate(90deg);
}
.nav-close{
  transform: rotate(-90deg);
}
.srinfo{
  display:flex;
  justify-content: space-between;
}
.submit-box{
  margin: 20px 0;
}
</style>
<style lang="scss">
.pdf-wrap {
  height: 500px;
}
.el-form-item__label-wrap{
  float: none;
  text-align: center;
}
 .bg-purple {
    background: #d3dce6;
  }
</style>