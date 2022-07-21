<template>
  <div class="container">
    <div :class="classObject">
      <h2 class="selectMode__h2">Select a game mode</h2>
      <retro-button
        class="selectMode__retroButton"
        @click="setGameMode('two players')"
        >1vs1</retro-button
      >
      <retro-button
        class="selectMode__retroButton"
        @click="setGameMode('with bot')"
        >Play with bot</retro-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import { useGameModeStore } from "../../stores/GameModeStore";

import RetroButton from "../RetroButton.vue";

import GameModeType from "../../types/GameModeType";

export default defineComponent({
  name: "TheSelectMode",
  components: { RetroButton },
  setup() {
    const { changeModeName } = useGameModeStore();

    let modeChanged = ref(false);

    const classObject = computed(() => ({
      selectMode: true,
      animate__animated: true,
      animate__zoomIn: !modeChanged.value,
      animate__zoomOut: modeChanged.value,
    }));

    function setGameMode(value: GameModeType) {
      changeModeName(value).then(() => {
        modeChanged.value = true;
      });
    }

    return { classObject, setGameMode };
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

/* .selectMode__button:hover {
  transform: translate(-20%, -20%);
} */

.selectMode__button:hover::after {
  transform: translateY(15%);
  z-index: -1;
}
</style>
