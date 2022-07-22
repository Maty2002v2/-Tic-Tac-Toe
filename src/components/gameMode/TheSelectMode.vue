<template>
  <div :class="classObjectContainer">
    <div :class="classObjectSelectMode">
      <h2 class="selectMode__h2">Select a game mode</h2>
      <retro-button
        class="selectMode__retroButton"
        @click="changeGameMode('two players')"
        >1vs1</retro-button
      >
      <retro-button
        class="selectMode__retroButton"
        @click="changeGameMode('with bot')"
        >Play with bot</retro-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { storeToRefs } from "pinia";
import { useGameModeStore } from "../../stores/GameModeStore";
import { useMainStore } from "../../stores/MainStore";

import RetroButton from "../RetroButton.vue";

import GameModeType from "../../types/GameModeType";

export default defineComponent({
  name: "TheSelectMode",
  components: { RetroButton },
  setup() {
    const { modeName } = storeToRefs(useGameModeStore());
    const { changeModeName } = useGameModeStore();

    const { restartGame } = useMainStore();

    const classObjectSelectMode = computed(() => ({
      selectMode: true,
      animate__animated: true,
      animate__zoomIn: !modeName.value,
      animate__zoomOut: modeName.value,
    }));

    const classObjectContainer = computed(() => ({
      container: true,
      "container--low-z-index": modeName.value,
    }));

    function changeGameMode(value: GameModeType) {
      restartGame();
      changeModeName(value);
    }

    return { classObjectSelectMode, classObjectContainer, changeGameMode };
  },
});
</script>

<style scoped>
.container {
  position: absolute;
  top: 40%;
  left: 50%;

  display: flex;
  justify-content: center;

  transform: translate(-50%, -50%);
}

.container--low-z-index {
  z-index: -99999;
}

.selectMode {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 300px;
  height: 150px;
  padding: 5px;
  box-sizing: border-box;
  border: 2px solid #ffffff;
  border-radius: 5px;
}

.selectMode__h2 {
  width: 100%;
  text-align: center;
}

.selectMode__retroButton {
  width: 45%;
}

.selectMode__button {
  position: relative;

  width: 50%;
  border: 1px solid white;

  color: #ffffff;
  text-align: center;

  background: #000000;

  cursor: pointer;
  transition: all 0.5s linear;
}

.selectMode__button::after {
  content: "";

  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;

  background: #ffffff;

  z-index: -1;
  transition: all 0.3s linear;
}

.selectMode__button:hover::after {
  transform: translateY(15%);
  z-index: -1;
}
</style>
