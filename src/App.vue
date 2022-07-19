<template>
  <div>
    <the-select-mode />
    <the-game />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TheGame from "./components/TheGame.vue";
import TheSelectMode from "./components/gameMode/TheSelectMode.vue";

import "@/styles/GlobalStyles.css";
import "@/styles/ResultsStyles.css";

export default defineComponent({
  name: "App",
  components: {
    TheGame,
    TheSelectMode,
  },
});
</script>

<style scoped>
.container {
  margin: 0 10px;
}
</style>
