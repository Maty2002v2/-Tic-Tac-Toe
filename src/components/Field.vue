<template>
  <div @click="selectField($event.target)">
    <span v-show="char">
      {{ char === "circle" ? "O" : "X" }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { storeToRefs } from "pinia";
import { useMainStore } from "../stores/MainStore";
import { useResaltsStore } from "../stores/ResaltsStore";

import CharType from "../types/CharType";

export default defineComponent({
  name: "Field",
  setup() {
    let char = ref<CharType>("");

    const { getCharState, getFinish } = storeToRefs(useMainStore());
    const { changeCharState } = useMainStore();

    const { makeMove } = useResaltsStore();

    function selectField(element: HTMLElement): void {
      if (char.value === "" && !getFinish.value) {
        char.value = getCharState.value;

        makeMove(
          char.value,
          parseInt(element.dataset.row!) - 1,
          parseInt(element.dataset.column!) - 1
        );

        changeCharState(getCharState.value === "circle" ? "cross" : "circle");

        element.classList.remove("boardGame__field--cursorPointer");
      }
    }

    return { char, selectField };
  },
});
</script>
