<template>
  <div class="login-image">
    <el-container class="login-container">
      <div class="login-panel">
        <div class="login-panel-header">系统登录</div>
        <div class="login-panel-body">
          <el-form ref="loginForm" :model="formData" :rules="rules">
            <el-form-item prop="account">
              <el-input v-model="formData.account" prefix-icon="el-icon-user" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input class="logpsd"
                v-model="formData.password"
                show-password
                prefix-icon="el-icon-lock"
                placeholder="密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <div class="login-forgot-psd">忘记密码</div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :disabled="isSubmit" @click="onSubmit">{{ submitText }}</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="login-panel-footer">
          <div class="login-hr"></div>
          <div class="login-hr-title">第三方登录</div>
          <div class="login-type-img">
            <img src="@images/login-type-weixin.png" alt="微信" width="60px" height="60px" />
          </div>
        </div>
      </div>
    </el-container>

    <el-dialog
      title
      custom-class="login-dialog"
      :visible.sync="dialogVisible"
      width="50vw"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      :center="true"
      top="36vh"
    >
      <div class="text-center">
        <span>用户名或密码错误，请重试！</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="margin-right-15" @click="dialogVisible = false">确 定</el-button>
        <el-button type="info" plain class="margin-left-15" @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import rules from './rules.js'
import URL from '@config/urlConfig.js'

export default {
  name: 'Login',
  data () {
    return {
      submitText: '登录',
      isSubmit: false,
      dialogVisible: false,
      formData: {
        account: '',
        password: ''
      },
      ...rules
    }
  },
  methods: {
    onSubmit () {
      this.$refs.loginForm.validate(isValid => {
        if (isValid && !this.isSubmit) {
          this.submitText = '登录中...'
          this.isSubmit = true
          let that = this
          this.$axios({
            method: 'post',
            url: '/login',
            data: {
              username: that.formData.account,
              password: this.formData.password
            }
          }).then(function (resp) {
            if (resp.status === 200 && resp.data && resp.data.code === 1) {
              that.submitText = '登录成功'
              that.$router.push({ path: '/index' })
            } else {
              that.$message.error(resp.data && resp.data.msg ? resp.data.msg : '系统异常，请联系管理员！')
            }
          })
          // this.$axios
          //   .post(URL['LOGIN'], {
          //     username: 'sz777',
          //     password: '123456'
          //   })
          //   .then(resp => {
          //     if (resp.status === 200 && resp.data && resp.data.code === 1) {
          //       this.submitText = '登录成功'
          //       this.$router.push({ path: '/index' })
          //     } else {
          //       this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '系统异常，请联系管理员！')
          //     }
          //   })
        } else if (!isValid) {
          // for test
          this.dialogVisible = true
          // this.$confirm('账号已禁用，不可登录此系统')
          //   .then(() => {
          //     // done()
          //   })
          //   .catch(() => {})
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$width: 543px;
$height: 646px;

.login-container {
  position: fixed;
  top: calc(50% - #{$height} / 2);
  left: calc(50% - #{$width} / 2);
  width: $width;
  height: $height;
  background-color: $white;
  box-shadow: 0px 0px 40px 0px rgba(6, 24, 101, 0.2);
  border-radius: 10px;
  .login-panel {
    width: $width;
    height: $height;

    .login-panel-header {
      margin: 50px 0;
      text-align: center;
      font-weight: bold;
      color: $dark-grey-6;

      @include font36;
    }



    .login-panel-body {
      padding: 0 57px;
      // common.sass

      .login-forgot-psd {
        float: right;
        color: $dark-grey-9;

        @include font14;
      }

      .el-button {
        width: 430px;
        height: 68px;
        background: rgba(21, 128, 248, 1);
        border-radius: 34px;

        @include font22;
      }
    }

    .login-panel-footer {
      .login-hr {
        margin: 75px 57px 36px 57px;
        border-top: 1px solid #cccccc;
      }

      .login-hr-title {
        position: relative;
        top: -48px;
        text-align: center;
        background-color: $white;
        margin: 0 175px;
        color: $dark-grey-9;
        @include font16;
      }

      .login-type-img {
        text-align: center;
      }

    }
  }
}
</style>
