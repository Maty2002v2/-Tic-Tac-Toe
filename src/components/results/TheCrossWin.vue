<template>
  <div class="crossWin"><span></span></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheCrossWin",
});
</script>

<style scoped>
.crossWin {
  position: relative;
  width: 200px;
  height: 300px;
  font-size: 100px;
  text-align: center;
  color: white;
  background: black;
  font-size: 50px;
  overflow: hidden;
  margin: 0 auto;
}

.crossWin {
  animation: show 3s forwards;
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.crossWin::before,
.crossWin::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  background: white;
  top: 50%;
  left: 50%;
}

.crossWin::before {
  animation: moveBefore 1.5s forwards;
}
@keyframes moveBefore {
  0% {
    transform-origin: left;
    transform: rotate(-45deg) translate(50%, -100%);
    opacity: 0;
  }
  100% {
    transform-origin: left;
    transform: rotate(-45deg) translate(-50%, -50%);
    opacity: 1;
  }
}

.crossWin::after {
  transform-origin: left;
  transform: rotate(45deg) translate(-50%, -50%);
  animation: moveAfter 1.5s forwards;
}

@keyframes moveAfter {
  0% {
    transform-origin: left;
    transform: rotate(45deg) translate(50%, 100%);
    opacity: 0;
  }
  100% {
    transform-origin: left;
    transform: rotate(45deg) translate(-50%, -50%);
    opacity: 1;
  }
}
</style>
