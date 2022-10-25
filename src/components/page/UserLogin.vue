<template>
  <a-row>
    <a-col :span="8" :offset="6" style="margin:200px 500px;">
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0;align-self: center">
          <a-breadcrumb-item style="text-align: center;align-self: center"><h3>登录</h3></a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
          >
            <a-form-item>
              <a-input
                v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入用户名' }] },
        ]"
                placeholder="用户名"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码' }] },
        ]"
                type="password"
                placeholder="密码"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-checkbox
                v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
              >
                记住密码
              </a-checkbox>
              <a class="login-form-forgot" href="">
                忘记密码
              </a>
              <a-button type="primary" html-type="submit" class="login-form-button">
                登录
              </a-button>
              <a href="/register">
                注册
              </a>
            </a-form-item>
          </a-form>
        </a-layout-content>
      </a-layout>
    </a-col>
  </a-row>
</template>

<script>
import axios from "axios";

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'normal_login'});
  },
  methods: {
    cacheCookie(type, value) {
      localStorage.setItem(type, value);
      this.$store.commit('$_set' + type, value);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          values = {
            userName:values.userName,password:values.password
          }
          this.$api.demo.login(values).then( res =>{
            if(res.code===1){
              this.cacheCookie('Token', res.data.token);
              this.$store.commit("$_setUserId",res.data.user.userId)
              if(res.data.user.level==0){
                this.$router.push({name:'UserList'});
              }
              else if (res.data.user.level==1){
                this.$router.push({name:"manager"})
              }
              else{
                this.$router.push({name:"worker"})
              }
            }
            else{
              console.log("登录失败！")
            }
          })
        }
      });
    },

  }
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
