<template>
  <div class="crossWin">
    <span></span>
    <div><p class="resultTitle">Win</p></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheCrossWin",
});
</script>

<style scoped>
@keyframes moveBefore {
  0% {
    opacity: 0;
    transform-origin: left;
    transform: rotate(-45deg) translate(50%, -100%);
  }
  100% {
    opacity: 1;
    transform-origin: left;
    transform: rotate(-45deg) translate(-50%, -50%);
  }
}

@keyframes moveAfter {
  0% {
    opacity: 0;
    transform-origin: left;
    transform: rotate(45deg) translate(50%, 100%);
  }
  100% {
    opacity: 1;
    transform-origin: left;
    transform: rotate(45deg) translate(-50%, -50%);
  }
}

.crossWin::before,
.crossWin::after {
  content: "";

  position: absolute;
  top: 50%;
  left: 50%;

  width: 100%;
  height: 8px;
  border-radius: 5px;

  background: white;
}

.crossWin::before {
  animation: moveBefore 1.5s forwards;
}

.crossWin::after {
  transform-origin: left;
  transform: rotate(45deg) translate(-50%, -50%);
  animation: moveAfter 1.5s forwards;
}
</style>
