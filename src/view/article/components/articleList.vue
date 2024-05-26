<script setup lang="ts">
import { type RouteRecordRaw, useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";
import dayjs from "dayjs";

const props = defineProps<{
  pages: RouteRecordRaw[];
}>();
let tags = ref<string[]>([]);

const $router = useRouter();
const toPages = (path: string) => {
  $router.push(path);
};

const newPages = ref<RouteRecordRaw[]>([...props.pages]);
const activeTag = ref("#全部");
const selectTag = (name: string) => {
  newPages.value = [];
  activeTag.value = name;
  if (name === "#全部") {
    newPages.value = props.pages;
    return;
  }
  props.pages.forEach(item => {
    if (
      (item.meta?.tags as string[]).indexOf(name) !== -1
    ) {
      newPages.value.push(item);
    }
  });
};

const sortPages = computed(() => {
  const newArr = [...newPages.value];
  newArr.sort(
    (a, b) =>
      dayjs(b.meta?.date as string).valueOf() -
      dayjs(a.meta?.date as string).valueOf()
  );
  return newArr;
});

onMounted(() => {
  props.pages.forEach((item: any) => {
    tags.value.push(...item.meta.tags);
  });
  tags.value = Array.from(new Set(tags.value));
});
</script>

<template>
  <div>
    <ul class="articleList_tags-list">
      <li
        :class="{
          tag: true,
          'tag--active': activeTag === '#全部'
        }"
        @click="selectTag('#全部')"
      >
        #全部
      </li>
      <li
        v-for="item of tags"
        :class="{
          tag: true,
          'tag--active': activeTag === item
        }"
        @click="selectTag(item)"
      >
        #{{ item }}
      </li>
    </ul>
    <ul class="articleList_list">
      <li
        class="mb-[15px]"
        v-for="item of sortPages"
        :key="item.name"
      >
        <p
          class="text-[24px] text-[#555] font-bold"
          @click="toPages(item.path)"
        >
          {{ item.meta?.title }}
        </p>
        <p class="text-[16px] text-[#999]">
          {{ item.meta?.desc }}
        </p>
        <p class="text-[14px] text-[#999]">
          {{ item.meta?.date }}
        </p>
        <p class="text-[#999]">
          <span
            v-for="tag of item.meta?.tags"
            class="text-[12px] p-[5px] bg-[#eee] rounded-[5px]"
          >
            #{{ tag }}
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.articleList_tags-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  > .tag {
    font-size: 12px;
    color: #999;
    background: #eee;
    padding: 5px;
    border-radius: 5px;
    margin: 0px 10px 10px 0px;
    transition: all 0.3s;

    &:hover {
      color: #000;
      background: #dddddd;
      cursor: pointer;
    }
  }

  .tag--active {
    color: #000;
    background: #dddddd;
  }
}

.articleList_list {
  > li {
    > p:nth-child(1) {
      display: inline-block;
      background: linear-gradient(to right, #000, #000)
        no-repeat;
      background-size: 0% 3px;
      background-position: right bottom;
      transition:
        background-size 0.5s,
        color 0.3s;
    }

    > p:nth-child(1):hover {
      color: #000;
      cursor: pointer;
      background-position: left bottom;
      background-size: 100% 3px;
    }

    > p {
      margin-bottom: 3px;
    }
  }
}
</style>
