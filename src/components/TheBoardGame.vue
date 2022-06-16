<template>
  <div><field></field></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Field from "./Field.vue";

export default defineComponent({
  name: "TheBoardGame",
  components: {
    Field,
  },
});
</script>

<style scoped></style>
