<template>
  <div id="app">
    <lt-layout>
      <lt-header>
        <app-header></app-header>
      </lt-header>
      <lt-main>
        <lt-layout :isRow="true">
          <lt-aside>123</lt-aside>
          <lt-main>123131</lt-main>
        </lt-layout>
      </lt-main>
    </lt-layout>
  </div>
</template>

<script>
import appHeader from 'src/layout/header/header.vue';

export default {
  name: 'app',
  components: { appHeader },
  data () {
    return {
      layoutWidth: '100%',
      mainLayoutIsRow: true
    }
  }
}
</script>
<style lang="less">
  @import './base/reset.css';
  .lt-header {
    height: 80px;
    background-color: rgb(246, 246, 246);
  }
</style>


