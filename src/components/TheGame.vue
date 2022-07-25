<template>
  <div>
    <div v-if="!getResult" class="game">
      <whose-turn v-if="showWhoseTurn" />
      <the-board-game />
      <the-change-mode />
    </div>
    <the-result />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { storeToRefs } from "pinia";
import { useGlobalWatchs } from "../stores/GlobalWatchs";
import { useResaltsStore } from "../stores/ResaltsStore";
import { useGameModeStore } from "../stores/GameModeStore";

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
    const { getModeName } = storeToRefs(useGameModeStore());

    const showWhoseTurn = computed(() => getModeName.value === "two players");

    return { getResult, showWhoseTurn };
  },
});
</script>

<style scoped>
.game {
  margin: 0 10px;
}
</style>
