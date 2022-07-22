<template>
  <div @click="selectField($event.target)">
    <span v-show="whetherFieldIsFree">
      {{ char === "circle" ? "O" : "X" }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import { storeToRefs } from "pinia";
import { useMainStore } from "../stores/MainStore";
import { useResaltsStore } from "../stores/ResaltsStore";

import CharType from "../types/CharType";

export default defineComponent({
  name: "Field",
  props: {
    whetherFieldIsFree: {
      type: String as PropType<CharType>,
      default: "",
      requaierd: true,
    },
  },
  setup(props) {
    let char = ref<CharType>("");

    const { getCharState, getFinish, getBotMovement } = storeToRefs(
      useMainStore()
    );
    // const { changeCharState } = useMainStore();

    const { makeMove } = useResaltsStore();

    function selectField(element: HTMLElement): void {
      if (
        props.whetherFieldIsFree === "" &&
        !getFinish.value &&
        !getBotMovement.value
      ) {
        // console.log(char.value, "----------------------------");
        char.value = getCharState.value;

        makeMove(
          char.value,
          parseInt(element.dataset.row!) - 1,
          parseInt(element.dataset.column!) - 1
        );

        // changeCharState(getCharState.value === "circle" ? "cross" : "circle");

        element.classList.remove("boardGame__field--cursorPointer");
      }
    }

    return { char, selectField };
  },
});
</script>
