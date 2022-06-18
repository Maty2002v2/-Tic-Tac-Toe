<template>
  <div>
    <div v-if="!getResult">
      <whose-turn />
      <the-board-game />
    </div>
    <the-result />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";

import TheBoardGame from "./components/TheBoardGame.vue";
import WhoseTurn from "./components/WhoseTurn.vue";
import TheResult from "./components/results/TheResult.vue";

import { useGlobalWatchs } from "./stores/GlobalWatchs";
import { useResaltsStore } from "./stores/ResaltsStore";

import "@/styles/GlobalStyles.css";
import "@/styles/ResultsStyles.css";

export default defineComponent({
  name: "App",
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

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
