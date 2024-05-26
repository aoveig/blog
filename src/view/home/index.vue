<script setup lang="ts">
import { ElTooltip } from "element-plus";
import about from "./about.md";
import personal from "~/assets/config/personal.config.json";

// 获取动态拼接的图标路径
function getIconUrl(icon: string) {
  return new URL(
    `../../assets/link/${icon}`,
    import.meta.url
  ).href;
}
</script>

<template>
  <div class="home">
    <img
      class="head-portrait home_space-between"
      src="../../assets/tx.jpg"
    />
    <p class="text-[16px] home_space-between">
      {{ personal.name }}
    </p>
    <p class="text-[14px] text-[#999] home_space-between">
      {{ personal.introduction }}
    </p>
    <ul class="flex-b-c">
      <li
        class="mx-[5px] animate-pulse hover:cursor-pointer"
        v-for="item of personal.mediaAccount"
        :key="item.icon"
      >
        <el-tooltip
          effect="dark"
          :content="item.remark"
          placement="bottom"
        >
          <a :href="item.line" target="_blank">
            <img
              class="w-[20px] h-[20px]"
              :src="getIconUrl(item.icon)"
            />
          </a>
        </el-tooltip>
      </li>
    </ul>
    <div class="w-[650px] mt-[50px]">
      <about />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .head-portrait {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 0px 0px 2px #000;
  }
}

.home_space-between {
  margin-bottom: 5px;
}
</style>
