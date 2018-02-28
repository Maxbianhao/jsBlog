<template>
  <div class="admin-header">
    <lt-menu :mode="'horizontal'" class="userbar">
      <lt-menu-item-select>
        <span slot="title">{{userName}}</span>
        <lt-menu-item><span>账号管理</span></lt-menu-item>
        <lt-menu-item><span>退出登录</span></lt-menu-item>
      </lt-menu-item-select>
    </lt-menu>
  </div>
</template>
<script>
export default {
  name: 'appHeader',
  data() {
    return {
      userName: '管理员账号：1231231231231'
    }
  }
}
</script>
<style lang="less">
  .userbar {
    float: right;
    margin: 22px 60px 22px 0px;
  }
  .userbar .lt-menu-select .lt-menu-select__title {
    padding: 0px;
  }
  .userbar .lt-menu-select {
    position: relative;
  }
  .userbar .lt-menu-select .lt-menu-select__content {
    width: 100%;
    background-color: #f6f6f6;
    border: 1px solid #cbcbcb;
  }
</style>

