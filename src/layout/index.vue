<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const $router = useRouter();
const $route = useRoute();
const toPath = (path: string) => {
  $router.push(path);
};

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
          <li
            v-for="item of menuList"
            :class="{
              'li--active': $route.path === item.path
            }"
            :key="item.path"
            @click="toPath(item.path)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="app-content">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
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
    box-shadow: 0px 3px 10px #eee;
    position: sticky;
    top: 0px;
    background: rgba(255, 255, 255, 0.6);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 999;

    .header_logo {
      font-size: 22px;
    }

    .header_menu {
      > ul {
        display: flex;

        > li {
          padding: 10px;
          background: linear-gradient(
              to right,
              #22c1c3,
              #22c1c3
            )
            no-repeat;
          background-size: 0% 3px;
          background-position: right bottom;
          transition: background-size 0.2s;
          color: #555;
        }

        > li:hover {
          background-position: left bottom;
          background-size: 100% 3px;
          cursor: pointer;
          color: #22c1c3;
        }

        .li--active {
          color: #22c1c3;
          background-size: 100% 3px;
          font-weight: bolder;
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
