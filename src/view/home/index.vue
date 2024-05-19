<script setup lang="ts">
import { ElTooltip } from "element-plus";
import readme from "pages/rests/readme.md";

const lineList = [
  {
    name: "推特",
    icon: "twitter.svg",
    line: "https://x.com",
    remark: "123456789"
  },
  {
    name: "QQ",
    icon: "qq.svg",
    line: "https://qq.com",
    remark: "123456789"
  },
  {
    name: "微信",
    icon: "weixin.svg",
    line: "https://qq.com",
    remark: "123456789"
  },
  {
    name: "GitHub",
    icon: "github.svg",
    line: "https://github.com",
    remark: "123456789"
  },
  {
    name: "Gitee",
    icon: "gitee.svg",
    line: "https://gitee.com",
    remark: "123456789"
  }
];

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
    <p class="home_name home_space-between">
      雨夜带刀不带伞
    </p>
    <p class="home_introduction home_space-between">
      一个不会写代码的小说迷
    </p>
    <ul class="flex-b-c">
      <li
        class="mx-[5px] animate-pulse hover:cursor-pointer"
        v-for="item of lineList"
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
      <readme></readme>
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

  .home_name {
    font-size: 16px;
  }

  .home_introduction {
    font-size: 14px;
    color: #999;
  }
}

.home_space-between {
  margin-bottom: 5px;
}
</style>
