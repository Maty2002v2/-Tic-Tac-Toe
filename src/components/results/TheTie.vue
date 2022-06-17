<template>
  <div class="tie">
    <span>Remis</span><span><span></span></span><span></span><span></span>
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
  width: 400px;
}

.tie span {
  position: absolute;
}

.tie span:nth-child(1) {
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.tie span:nth-child(2) {
  top: 32%;
  left: 50%;
  width: 190px;
  height: 190px;
  border-radius: 50%;

  background: white;

  transform: translate(-50%, -50%);

  animation: moveToLeft 5s ease forwards 0.2s;
}

.tie span:nth-child(2) span {
  top: 50%;
  left: 50%;
  width: 165px;
  height: 165px;
  border-radius: 50%;

  background: black;

  transform: translate(-50%, -50%);
}
.tie span:nth-child(3) {
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

.tie span:nth-child(4) {
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
