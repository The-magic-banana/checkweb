<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo"/>
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <router-link to="/user-login">登录</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          注册
        </a-menu-item>
        <a-menu-item key="3">
          实时分析系统
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user"/><router-link to="/user-list">员工管理</router-link></span>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop"/>考勤管理</span>
            <a-menu-item key="5">
              <router-link to="">日考勤管理</router-link>
            </a-menu-item>
            <a-menu-item key="6">
              部门考勤管理
            </a-menu-item>
            <a-menu-item key="7">
              月度考勤管理
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="notification"/>实时分析系统</span>
            <a-menu-item key="9">
              option9
            </a-menu-item>
            <a-menu-item key="10">
              option10
            </a-menu-item>
            <a-menu-item key="11">
              option11
            </a-menu-item>
            <a-menu-item key="12">
              option12
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name:"UserIndex",
  data() {
    return {
      collapsed: false,
    };
  },

};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
