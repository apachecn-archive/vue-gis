<template>
  <div class="layout">
    <div class="siderbar">
      <Siderbar />
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Siderbar from './siderbar'
export default {
  components: {
    Siderbar
  }
}
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
}
.siderbar {
  width: 240px;
  background: #001b31;
  overflow: hidden;
  overflow-y: auto;
}
.container {
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
}
</style>
