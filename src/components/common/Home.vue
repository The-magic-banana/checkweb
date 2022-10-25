<template>
  <a-layout id="components-layout-demo-top-side-2">
    <v-head></v-head>
    <a-layout>
      <v-sidebar></v-sidebar>
      <router-view/>
    </a-layout>
  </a-layout>
</template>

<script>
import vHead from "./Header"
import vSidebar from "./Sidebar"
export default {
  name: "Home",
  data() {
    return {
      collapsed: false,
    };
  },
  components:{
    vHead,
    vSidebar
  }
}
</script>

<style scoped>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
