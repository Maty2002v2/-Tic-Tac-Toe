<template>
  <div class="changeMode">
    <p class="changeMode__pharagraf">Press SPACEBAR to change game mode.</p>
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
}
</style>
