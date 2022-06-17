<template>
  <div class="boardGame">
    <field class="field cursorPointer" data-row="1" data-column="1" />
    <field class="field cursorPointer" data-row="1" data-column="2" />
    <field class="field cursorPointer" data-row="1" data-column="3" />
    <field class="field cursorPointer" data-row="2" data-column="1" />
    <field class="field cursorPointer" data-row="2" data-column="2" />
    <field class="field cursorPointer" data-row="2" data-column="3" />
    <field class="field cursorPointer" data-row="3" data-column="1" />
    <field class="field cursorPointer" data-row="3" data-column="2" />
    <field class="field cursorPointer" data-row="3" data-column="3" />
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
