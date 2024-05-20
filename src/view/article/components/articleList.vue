<script setup lang="ts">
import { type RouteRecordRaw, useRouter } from "vue-router";

const $router = useRouter();
const toPages = (path: string) => {
  $router.push(path);
};

defineProps<{
  pages: RouteRecordRaw[];
}>();
</script>

<template>
  <div>
    <ul class="article_list">
      <li
        class="mb-[15px]"
        v-for="item of pages"
        @click="toPages(item.path)"
        :key="item.name"
      >
        <p class="text-[24px] text-[#555] font-bold">
          hello world
        </p>
        <p class="text-[18px] text-[#999]">
          hello world,hello blog-template
        </p>
        <p class="text-[14px] text-[#999]">2024-5-19</p>
        <p class="text-[#999]">
          <span
            class="text-[12px] p-[5px] bg-[#eee] rounded-[5px]"
            >#分类</span
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.article_list {
  > li {
    > p {
      margin-bottom: 3px;
    }
  }
}
</style>
