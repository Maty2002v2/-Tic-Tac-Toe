<template>
  <div>
    <the-select-mode />
    <the-game v-if="modeName" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { storeToRefs } from "pinia";
import { useGameModeStore } from "./stores/GameModeStore";

import TheGame from "./components/TheGame.vue";
import TheSelectMode from "./components/gameMode/TheSelectMode.vue";

import "animate.css";
import "@/styles/GlobalStyles.css";
import "@/styles/ResultsStyles.css";

export default defineComponent({
  name: "App",
  components: {
    TheGame,
    TheSelectMode,
  },
  setup() {
    const { modeName } = storeToRefs(useGameModeStore());

    return { modeName };
  },
});
</script>
