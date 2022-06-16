<template>
  <div @click="selectField($event.target)">
    <span v-show="char">
      {{ char === "circle" ? "O" : "X" }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";
import { useMainStore } from "../stores/MainStore";
import CharType from "../types/CharType";

export default defineComponent({
  name: "Field",
  setup() {
    let char = ref<CharType>("");

    const { getCharState } = toRefs(useMainStore());
    const { changeCharState } = useMainStore();

    function selectField(element: HTMLElement): void {
      if (char.value === "") {
        char.value = getCharState.value;

        element.classList.remove("cursorPointer");

        changeCharState(getCharState.value === "circle" ? "cross" : "circle");
      }
    }

    return { char, selectField };
  },
});
</script>
