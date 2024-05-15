<script setup lang="ts">
// 菜单列表
const menuList = [
  {
    name: "首页",
    path: "/home",
    icon: ""
  },
  {
    name: "文章",
    path: "/article",
    icon: ""
  },
  {
    name: "归档",
    path: "/archive",
    icon: ""
  },
  {
    name: "分类",
    path: "/classify",
    icon: ""
  }
];
</script>

<template>
  <div class="app-layout">
    <div class="app-header flex-b-c">
      <div class="header_logo">
        <p>blog-template</p>
      </div>
      <div class="header_menu">
        <ul>
          <li v-for="item of menuList" :key="item.path">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="app-content">
      <RouterView />
    </div>
    <div class="app-footer flex-c-c">
      <p>2024-2024</p>
      <p>blog-template</p>
      <p>hello world</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .app-header {
    padding: 10px;
    box-shadow: 0px 1px 2px #eee;

    .header_logo {
      font-size: 22px;
    }

    .header_menu {
      > ul {
        display: flex;

        > li {
          padding: 10px;
        }
      }
    }
  }

  .app-content {
    flex: 1;
    margin: 0 auto;
  }

  .app-footer {
    padding: 20px;
    background: #000;

    > p {
      margin: 0px 10px;
      color: #fff;
    }
  }
}
</style>
