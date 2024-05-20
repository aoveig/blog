<script setup lang="ts">
import articleList from "./components/articleList.vue";
import articleDetails from "./components/articleDetails.vue";
import pages from "~pages";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const $route = useRoute();

const actionCom = ref<string>("articleList");

watch(
  () => $route.path,
  newV => {
    if (newV.split("/").length === 2) {
      actionCom.value = "articleList";
    } else {
      actionCom.value = "articleDetails";
    }
  }
);
</script>

<template>
  <div class="w-[600px] p-[20px]">
    <Transition name="slide-fade" mode="out-in">
      <articleList
        v-if="actionCom === 'articleList'"
        :pages
      />
      <articleDetails v-else />
    </Transition>
  </div>
</template>
