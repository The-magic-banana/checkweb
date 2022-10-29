<template>
  <a-layout-header class="header">
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['1']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        员工考勤系统
      </a-menu-item>
      <router-link to="logout"><a-icon type="logout" style="font-size: x-large;color: red;margin-left: 1200px" /></router-link>
<!--/*      <a-avatar style="backgroundColor:#87d068;float: right" icon="user" size="large"/>*/-->
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: "vHeader"
}
</script>

<style scoped>

</style>
