<template>
  <div class="const">
    <div class="login">
      <h1>iHRM 后台登录系统</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="mobile">
          <el-input v-model="ruleForm.mobile"
            ><i slot="prefix" class="el-icon-user-solid"></i
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" show-password>
            <i slot="prefix" class="el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>

      <div class="footer">
        仅用于IT培训教学使用,为保障您的个人信息安全,请勿向平台录入任何个人敏感信息（如手机号、身份证号等）！
      </div>
    </div>
  </div>
</template>

<script>
import { getlogin } from '../utils/api'
import { setToken } from '../utils/auth'
import { STATUS } from '../utils/codeFlag'
export default {
  name: 'loginView',
  data() {
    return {
      // 表单登录定义
      ruleForm: {
        mobile: '13800000002',
        password: '888itcast.CN764%...'
      },
      // 表单验证
      rules: {
        mobile: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          getlogin(this.ruleForm).then((res) => {
            console.log(res, '登录的数据')
            const { code, data } = res //结构code和data
            if (code == STATUS.CODE) {
              // 判断是否是后台返回的成功的状态码
              setToken(data) //将后台返回的token存在我们的cookic里
              this.$router.push('/')
              this.$message({
                message: '登录成功',
                type: 'success'
              })
            }
          })
        }
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.const {
  // text-align: center;
  width: 100%;
  height: 100vh;
  background-image: url('http://ihrm-java.itheima.net/static/img/login.c75bab6.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .login {
    width: 400px;
    height: 400px;
    // background-color: pink;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    ::v-deep .el-button {
      // margin-top: 50px;
      width: 400px;
    }
    h1 {
      font-weight: normal;
      margin-bottom: 30px;
      font-size: 44px;
    }
    .footer {
      font-size: 12px;
    }
    ::v-deep .el-input__inner {
      color: #68b0fe;
      background-color: #d4e5ff;
    }
    i {
      margin-left: 8px;
    }
  }
}
</style>
