<template>
  <div>
    <whose-turn />
    <the-board-game />
    <the-result></the-result>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import TheBoardGame from "./components/TheBoardGame.vue";
import WhoseTurn from "./components/WhoseTurn.vue";
import TheResult from "./components/results/TheResult.vue";

import { useGlobalWatchs } from "./stores/GlobalWatchs";

import "@/styles/globalStyles.css";

export default defineComponent({
  name: "App",
  components: {
    TheBoardGame,
    WhoseTurn,
    TheResult,
  },
  setup() {
    useGlobalWatchs();
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
