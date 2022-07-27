<template>
  <div class="whoseTurn">
    <h1 class="whoseTurn__h1" v-html="whoseTurn()"></h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { storeToRefs } from "pinia";
import { useMainStore } from "../stores/MainStore";
import { useGameModeStore } from "../stores/GameModeStore";

export default defineComponent({
  name: "WhoseTurn",
  setup() {
    const { getCharState } = storeToRefs(useMainStore());
    const { getModeName } = storeToRefs(useGameModeStore());

    function whoseTurn() {
      switch (getModeName.value) {
        case "two players":
          return `Currently: ${getCharState.value}`;
        case "with bot":
          return `Currently: ${
            getCharState.value === "cross" ? "<i>bot</i>" : "<i>ty</i>"
          }`;
      }
    }

    return { getCharState, whoseTurn };
  },
});
</script>

<style scoped>
.whoseTurn__h1 {
  text-align: center;
}
</style>
