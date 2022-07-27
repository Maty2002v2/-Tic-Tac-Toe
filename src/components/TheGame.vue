<template>
  <div>
    <transition>
      <div v-if="!getResult" class="game">
        <whose-turn />
        <the-board-game />
        <the-change-mode />
      </div>
    </transition>
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
import TheResult from "./TheResult.vue";
import TheChangeMode from "./gameMode/TheChangeMode.vue";

export default defineComponent({
  name: "TheGame",
  components: {
    TheBoardGame,
    WhoseTurn,
    TheResult,
    TheChangeMode,
  },
  setup() {
    useGlobalWatchs();

    const { getResult } = storeToRefs(useResaltsStore());

    return { getResult };
  },
});
</script>

<style scoped>
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  opacity: 0;
}

.game {
  margin: 0 10px;
}
</style>
