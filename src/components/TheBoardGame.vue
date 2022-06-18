<template>
  <div class="boardGame">
    <field
      class="field firstField cursorPointer"
      data-row="1"
      data-column="1"
    />
    <field
      class="field secondField cursorPointer"
      data-row="1"
      data-column="2"
    />
    <field
      class="field thirdField cursorPointer"
      data-row="1"
      data-column="3"
    />
    <field
      class="field fourthField cursorPointer"
      data-row="2"
      data-column="1"
    />
    <field
      class="field fourthField cursorPointer"
      data-row="2"
      data-column="2"
    />
    <field
      class="field sixthField cursorPointer"
      data-row="2"
      data-column="3"
    />
    <field
      class="field seventhField cursorPointer"
      data-row="3"
      data-column="1"
    />
    <field
      class="field eighthField cursorPointer"
      data-row="3"
      data-column="2"
    />
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

<style scoped>
.firstField,
.fourthField,
.seventhField,
.seventhField,
.eighthField {
  border-right: 2px solid white;
}

.firstField,
.secondField,
.thirdField,
.fourthField,
.fifthField,
.sixthField {
  border-bottom: 2px solid white;
}

.thirdField,
.sixthField {
  border-left: 2px solid white;
}
</style>
