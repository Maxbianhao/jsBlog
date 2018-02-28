<template>
  <div id="app">
    <lt-layout class="frame-wrapper">
      <lt-header :height="'80px'" class="app-header">
        <app-header></app-header>
      </lt-header>
      <lt-main :height="'auto'">
        <lt-layout :isRow="true" class="frame-wrapper">
          <lt-aside class="app-aside">
            <lt-menu class="app-menu">
              <lt-menu-item :href="'/index'"><span>Home/首页</span></lt-menu-item>
              <lt-menu-item :href="'#1'"><span>Projects/项目</span></lt-menu-item>
              <lt-menu-item :href="'#2'"><span>Articles</span></lt-menu-item>
              <lt-menu-item :href="'#3'"><span>Holyhi Tools</span></lt-menu-item>
              <lt-menu-item :href="'#4'"><span>Our Friends</span></lt-menu-item>
              <lt-menu-item :href="'#5'"><span>About us</span></lt-menu-item>
              <lt-menu-item :href="'#6'"><span>其他</span></lt-menu-item>
            </lt-menu>
          </lt-aside>
          <lt-main :height="'auto'"></lt-main>
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
  @import './base/zIndex.css';
  html {
    user-select: none;
  }
  html, body, #app {
    height: 100%;
  }
  .frame-wrapper {
    height: 100%;
  }
  .app-header {
    background-color: rgb(246, 246, 246);
  }
  .app-aside {
    box-shadow: 0px 0px 6px #E7E7E7;
  }
  .app-menu {
    background-color: #E1E1E1;
    .lt-menu-item {
      padding-left: 18px;
      line-height: 40px;
      &:hover {
        color: #fff;
        background-color: #C2001E;
        a {
          color: #fff;
        }
      }
    }
    .lt-menu-item.router-link-active{
      color: #fff;
      background-color: #C2001E;
      a {
        color: #fff;
      }
    }
  }
</style>


