<template>
  <div class="result">
    <the-circle-win v-if="getResult === 'circle'"></the-circle-win>
    <the-cross-win v-else-if="getResult === 'cross'"></the-cross-win>
    <the-tie v-else-if="getResult === 'tie'"></the-tie>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";

import { useResaltsStore } from "../../stores/ResaltsStore";

import TheCircleWin from "./TheCircleWin.vue";
import TheCrossWin from "./TheCrossWin.vue";
import TheTie from "./TheTie.vue";

export default defineComponent({
  name: "TheResult",
  components: { TheCircleWin, TheCrossWin, TheTie },
  setup() {
    const { getResult } = storeToRefs(useResaltsStore());

    return { getResult };
  },
});
</script>

<style scoped></style>
