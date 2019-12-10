<template>
  <div id="app" class="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <div class="siderbar">
      <Siderbar/>
    </div>
    <div class="container">
      <div class="header">header</div>
      <div class="content">content</div>
    </div>
  </div>
</template>

<script>
import Siderbar from '@/components/layout/Siderbar'
export default {
  components: {
    Siderbar
  }
  
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app {
  display: flex;
  width: 100%;
  height: 100%;
  .siderbar {
    width: 240px;
    background: #545c64;
  }
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      flex: none;
      height: 50px;
      line-height: 50px;
    }
    .content {
      flex: 1;
    }
  }
}
</style>
