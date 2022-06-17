<template>
  <div class="circleWin"><span></span></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheCircleWin",
});
</script>

<style scoped>
.circleWin {
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

.circleWin {
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

.circleWin::before,
.circleWin::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  background: white;
  top: 50%;
  left: 50%;
}

.circleWin::before {
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

.circleWin::after {
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
