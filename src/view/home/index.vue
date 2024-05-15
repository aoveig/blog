<script setup lang="ts">
const lineList = [
  {
    name: "推特",
    icon: "",
    line: ""
  },
  {
    name: "QQ",
    icon: "",
    line: ""
  },
  {
    name: "微信",
    icon: "",
    line: ""
  },
  {
    name: "GitHub",
    icon: "",
    line: ""
  },
  {
    name: "Gitee",
    icon: "",
    line: ""
  }
];
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
        class="mx-[5px]"
        v-for="item of lineList"
        :key="item.name"
      >
        {{ item.name }}
      </li>
    </ul>
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
