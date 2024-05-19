<script setup lang="ts">
import pages from "~pages";
</script>

<template>
  <div class="w-[600px] p-[20px]">
    <ul class="article_list">
      <router-link
        v-for="item of pages"
        :to="item.path"
        :key="item.name"
      >
        <li class="mb-[15px]">
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
      </router-link>
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
