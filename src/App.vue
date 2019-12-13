<template>
  <div id="app" class="app">
    <div class="siderbar">
      <Siderbar/>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Siderbar from '@/components/layout/siderbar'
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
  background: #F5F7F9;
  .siderbar {
    width: 240px;
    background: #001B31;
    overflow: hidden;
    overflow-y: auto;
  }
  .container {
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
  }
}
</style>
