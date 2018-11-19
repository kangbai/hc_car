<template>
  <div style="height: 100%;">
    <div class="login_bg">
        <div class="login_bg_cr">
          <div class="login_cent">
            <div class="login_size_bg">
              <img :src="require('@/assets/imgs/login-size-bg.png')">
            </div>
            <h2 class="login_tit">
              <span>合创融租后台管理系统</span>
            </h2>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
              <FormItem prop="phone" style="margin-bottom: 30px;">
                <Input type="text" v-model="formValidate.phone" placeholder="用户名" size="large" clearable></Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="formValidate.password" placeholder="密码" size="large" clearable @keyup.enter.native="handleSubmit('formValidate')"></Input>
              </FormItem>
              <FormItem>
                <ButtonGroup style="display: block; margin-top: 25px;">
                   <Button :size="buttonSize" type="primary" :loading="buttonData.loading" @click="handleSubmit('formValidate')" long style="height: 40px; font-size: 16px;">
                      {{buttonData.text}}
                  </Button>
                </ButtonGroup>
              </FormItem>
            </Form>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5'
import { accountLogin } from '../../api/api'
import myStorage from '../../utils/myStorage'
export default {
  name: 'login',
  data () {
    return {
      buttonSize: 'large',
      buttonData: {
        loading: false,
        text: '登录'
      },
      formValidate: {
        phone: '',
        password: '',
        deviceId: ''
      },
      ruleValidate: {
        phone: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {type: 'string', min: 6, message: '密码不能少于6位数', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.buttonData.loading = true
          this.buttonData.text = '登录中'
          setTimeout(() => {
            this.buttonData.text = '登录'
            this.buttonData.loading = false
            let deviceId = md5(navigator.userAgent + this.formValidate.phone)
            this.formValidate.deviceId = deviceId
            this._accountLogin(this.formValidate)
          }, 1000)
        } else {
          this.$Modal.error({
            title: '登录提示',
            content: '请填写规范'
          })
        }
      })
    },
    // 登录
    _accountLogin (obj) {
      accountLogin(obj)
        .then((res) => {
          if (!res.error) {
            let { realName, phone, token } = res.result
            let date = +new Date()
            let userData = {
              realName, // 用户名字
              phone, // 手机号码
              token, // 用户token
              deviceId: this.formValidate.deviceId,
              date // 当前登录的时间
            }
            myStorage.set('myData', userData)
            this.$Message.success({
              content: res.errMsg,
              onClose: () => { // 登录成功跳转到主页
                this.$router.push({name: 'home'})
              },
              duration: 0.8
            })
          } else {
            this.$Modal.error({
              title: '登录提示',
              content: res.errMsg
            })
          }
        })
        .catch((err) => {
          console.log(err, 'err')
        })
    }
  }
}
</script>

<style lang="scss">
.login_bg {
  width: 100%;
  height: 100%;
  background: url("../../assets/imgs/login-log-bg.png") center center no-repeat;
  background-size: 100%;
  position: relative;
  .login_bg_cr {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(43,47,53,.87);
  }
  .login_cent {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 470px;
    background: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 50px;
  }
  .login_size_bg {
    width: 100px;
    height: 100px;
    background-color: #0091e0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 50%;
  }
  .login_tit {
    margin: 20px auto;
    text-align: center;
  }
}
</style>
