<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="user"/><router-link to="/check/">员工管理</router-link></span>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="laptop"/>考勤管理</span>
        <a-menu-item key="5">
          <router-link to="">日考勤管理</router-link>
        </a-menu-item>
        <a-menu-item key="6">
          日部门考勤管理
        </a-menu-item>
        <a-menu-item key="7">
          异常员工显示
        </a-menu-item>
        <a-menu-item key="8">
          月考勤管理
        </a-menu-item>
        <a-menu-item key="9">
          月部门考勤管理
        </a-menu-item>
        <a-menu-item key="10">
          月异常员工显示
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
</template>

<script>
export default {
  name: "vSidebar"
}
</script>

<style scoped>

</style>
