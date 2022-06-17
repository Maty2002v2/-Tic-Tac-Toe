<template>
  <div>
    <the-circle-win></the-circle-win>
    <the-cross-win></the-cross-win>
    <the-tie></the-tie>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheCircleWin from "./TheCircleWin.vue";
import TheCrossWin from "./TheCrossWin.vue";
import TheTie from "./TheTie.vue";

export default defineComponent({
  components: { TheCircleWin, TheCrossWin, TheTie },
  name: "TheResult",
});
</script>
