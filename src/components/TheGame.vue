<template>
  <div>
    <div v-if="!getResult" class="container">
      <whose-turn />
      <the-board-game />
    </div>
    <the-result />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { storeToRefs } from "pinia";
import { useGlobalWatchs } from "../stores/GlobalWatchs";
import { useResaltsStore } from "../stores/ResaltsStore";

import TheBoardGame from "./TheBoardGame.vue";
import WhoseTurn from "./WhoseTurn.vue";
import TheResult from "./results/TheResult.vue";

import "@/styles/GlobalStyles.css";
import "@/styles/ResultsStyles.css";

export default defineComponent({
  name: "TheGame",
  components: {
    TheBoardGame,
    WhoseTurn,
    TheResult,
  },
  setup() {
    useGlobalWatchs();

    const { getResult } = storeToRefs(useResaltsStore());

    return { getResult };
  },
});
</script>

<style scoped>
.container {
  margin: 0 10px;
}
</style>
