<template>
  <div class="whoseTurn">
    <h1 class="whoseTurn__h1">Currently: {{ getCharState }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useMainStore } from "../stores/MainStore";

export default defineComponent({
  name: "WhoseTurn",
  setup() {
    const { getCharState } = toRefs(useMainStore());

    return { getCharState };
  },
});
</script>

<style scoped>
.whoseTurn__h1 {
  text-align: center;
}
</style>
