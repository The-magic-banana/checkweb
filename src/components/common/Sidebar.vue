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
        <span slot="title"><a-icon type="laptop"/><router-link to="/check/depart">考勤管理</router-link></span>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <span slot="title"><a-icon type="notification"/>实时分析系统</span>
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
