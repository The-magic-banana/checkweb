<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="laptop"/>部门考勤管理</span>
        <a-menu-item key="1">
          <router-link to="">日考勤管理</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          周部门考勤管理
        </a-menu-item>
        <a-menu-item key="3">
          月考勤管理
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: "ManagerSideBar"
}
</script>

<style scoped>

</style>
