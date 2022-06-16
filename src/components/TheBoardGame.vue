<template>
  <div class="boardGame">
    <field class="field" v-for="field in 9" :key="field" />
  </div>
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
