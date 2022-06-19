<template>
  <div class="boardGame">
    <field
      v-for="(field, index) in fieldData"
      :key="index"
      :class="field.classes"
      :data-row="field.row"
      :data-column="field.column"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Field from "./Field.vue";
import FieldInterface from "../types/FieldIntercace";

export default defineComponent({
  name: "TheBoardGame",
  components: {
    Field,
  },
  setup() {
    const fieldData: FieldInterface[] = reactive([
      {
        row: 1,
        column: 1,
        classes: [
          "boardGame__field boardGame__field--borderRight  boardGame__field--cursorPointer",
        ],
      },
      {
        row: 1,
        column: 2,
        classes: ["boardGame__field  boardGame__field--cursorPointer"],
      },
      {
        row: 1,
        column: 3,
        classes: [
          "boardGame__field boardGame__field--borderLeft boardGame__field--cursorPointer",
        ],
      },
      {
        row: 2,
        column: 1,
        classes: [
          "boardGame__field boardGame__field--borderTop boardGame__field--borderRight boardGame__field--cursorPointer",
        ],
      },
      {
        row: 2,
        column: 2,
        classes: [
          "boardGame__field boardGame__field--borderTop boardGame__field--borderBottom boardGame__field--cursorPointer",
        ],
      },
      {
        row: 2,
        column: 3,
        classes: [
          "boardGame__field boardGame__field--borderTop boardGame__field--borderLeft boardGame__field--cursorPointer",
        ],
      },
      {
        row: 3,
        column: 1,
        classes: [
          "boardGame__field boardGame__field--borderTop boardGame__field--borderRight boardGame__field--cursorPointer",
        ],
      },
      {
        row: 3,
        column: 2,
        classes: [
          "boardGame__field boardGame__field--borderRight boardGame__field--cursorPointer",
        ],
      },
      {
        row: 3,
        column: 3,
        classes: [
          "boardGame__field boardGame__field--borderTop boardGame__field--cursorPointer",
        ],
      },
    ]);

    return { fieldData };
  },
});
</script>

<style scoped>
.boardGame__field--borderTop {
  border-top: 1px solid #ffffff;
}

.boardGame__field--borderRight {
  border-right: 1px solid #ffffff;
}

.boardGame__field--borderBottom {
  border-bottom: 1px solid #ffffff;
}

.boardGame__field--borderLeft {
  border-left: 1px solid #ffffff;
}

.boardGame__field--firstField {
  border: 1px solid #ffffff;
}
</style>
