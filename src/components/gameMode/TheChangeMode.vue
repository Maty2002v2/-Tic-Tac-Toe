<template>
  <div class="changeMode">
    <p class="content" @click="changeGameMode">
      Press
      <span class="content__kbd" ref="spacebar">SPACEBAR</span> to change game
      mode or click on the inscription.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import { storeToRefs } from "pinia";
import { useGameModeStore } from "../../stores/GameModeStore";
import { useMainStore } from "../../stores/MainStore";

export default defineComponent({
  name: "TheChangeMode",
  setup() {
    const { changeModeName } = useGameModeStore();

    const { getFinish } = storeToRefs(useMainStore());

    const spacebar = ref<HTMLElement>()!;

    onMounted(() => {
      document.addEventListener("keydown", (e) => {
        if (e.code == "Space" && !getFinish.value) {
          spacebar.value
            ? spacebar.value.classList.add("content__kbd--press")
            : "";
        }
      });

      spacebar.value!.addEventListener("animationend", function (e) {
        spacebar.value
          ? spacebar.value.classList.remove("content__kbd--press")
          : "";
        changeModeName("");
      });
    });

    function changeGameMode() {
      if (!getFinish.value) {
        changeModeName("");
      }
    }

    return { spacebar, changeGameMode };
  },
});
</script>

<style scoped>
@keyframes MoveKbd {
  from {
    box-shadow: 1px 0 1px 0 #eee, 0 2px 0 0px #ccc, 0 2px 0 1px #444;
    transform: translateY(5px);
  }
  to {
    box-shadow: 1px 0 1px 0 #eee, 0 2px 0 2px #ccc, 0 2px 0 3px #444;
    transform: translateY(-5px);
  }
}

.changeMode {
  margin-top: 100px;
  word-spacing: 5px;
}

.content {
  text-align: center;
  cursor: pointer;
}

.content__kbd {
  position: relative;

  display: inline-block;
  border: 1px solid gray;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  box-shadow: 1px 0 1px 0 #eee, 0 2px 0 2px #ccc, 0 2px 0 3px #444;
  padding: 1px 5px;
  margin: 2px 3px;

  color: #000000;
  font-size: 15px;
  font-weight: bold;

  background: #eee;
}

.content__kbd--press {
  animation: MoveKbd 0.5s ease-in-out;
}
</style>
