<template>
  <div class="changeMode">
    <p class="changeMode__pharagraf" @click="changeGameMode">
      Press <span class="kbd">SPACEBAR</span> to change game mode or click on
      the inscription.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import { storeToRefs } from "pinia";
import { useGameModeStore } from "../../stores/GameModeStore";
import { useMainStore } from "../../stores/MainStore";

export default defineComponent({
  name: "TheChangeMode",
  setup() {
    const { changeModeName } = useGameModeStore();

    const { getFinish } = storeToRefs(useMainStore());

    onMounted(() => {
      document.addEventListener("keyup", (e) => {
        if (e.code == "Space" && !getFinish.value) {
          changeModeName("");
        }
      });
    });

    function changeGameMode() {
      if (!getFinish.value) {
        changeModeName("");
      }
    }

    return { changeGameMode };
  },
});
</script>

<style scoped>
.changeMode {
  margin-top: 100px;
  word-spacing: 5px;
}

.changeMode__pharagraf {
  text-align: center;
  cursor: pointer;
}

.kbd {
  border: 1px solid gray;
  font-size: 15px;
  box-shadow: 1px 0 1px 0 #eee, 0 2px 0 2px #ccc, 0 2px 0 3px #444;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  margin: 2px 3px;
  padding: 1px 5px;
  color: #000000;
  font-weight: bold;
  background: #eee;
}
</style>
