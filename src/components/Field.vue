<template>
  <div @click="selectField($event.target)">
    <span v-show="whetherFieldIsFree" v-html="insertChar()"> </span>
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

    const { makeMove } = useResaltsStore();

    function selectField(element: HTMLElement): void {
      if (
        props.whetherFieldIsFree === "" &&
        !getFinish.value &&
        !getBotMovement.value
      ) {
        char.value = getCharState.value;

        makeMove(
          char.value,
          parseInt(element.dataset.row!) - 1,
          parseInt(element.dataset.column!) - 1
        );

        element.classList.remove("boardGame__field--cursorPointer");
      }
    }

    function insertChar() {
      if (char.value === "circle") {
        return "<i class='demo-icon icon-circle-empty'></i>";
      } else {
        return "<i class='demo icon-cancel-1'></i>";
      }
    }

    return { char, selectField, insertChar };
  },
});
</script>
