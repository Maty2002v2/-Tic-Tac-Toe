<template>
  <div class="tie">
    <span></span><span></span><span></span>
    <div><p class="resultTitle">Tie</p></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheTie",
});
</script>

<style scoped>
@keyframes moveToRight {
  0% {
    left: 50%;
  }
  100% {
    left: 73%;
  }
}

@keyframes moveToLeft {
  0% {
    left: 50%;
  }
  100% {
    left: 27%;
  }
}

.tie {
  width: 300px;
}

.tie span {
  position: absolute;
}

.tie span:nth-child(1) {
  top: 32%;
  left: 50%;
  width: 180px;
  height: 180px;
  border: 10px solid #ffffff;
  border-radius: 50%;
  box-sizing: border-box;

  background: transparent;

  transform: translate(-50%, -50%);

  animation: moveToLeft 5s ease forwards 0.2s;
}

.tie span:nth-child(2) {
  top: 32%;
  left: 50%;
  width: 190px;
  height: 8px;
  border-radius: 5px;

  background: white;

  z-index: -1;
  transform: translate(-50%, -50%) rotate(45deg);

  animation: moveToRight 5s ease forwards 0.2s;
}

.tie span:nth-child(3) {
  top: 32%;
  left: 50%;
  width: 190px;
  height: 8px;
  border-radius: 5px;

  background: white;

  z-index: -1;
  transform: translate(-50%, -50%) rotate(-45deg);

  animation: moveToRight 5s ease forwards 0.2s;
}
</style>
