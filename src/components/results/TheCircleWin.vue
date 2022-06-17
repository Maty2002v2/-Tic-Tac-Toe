<template>
  <div class="circleWin">
    <span></span><span></span><span></span><span></span>
  </div>
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
  animation: endO 2s forwards;
}

.circleWin span:nth-child(1) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 190px;
  height: 5px;
  background: white;
  animation: ObrKrzy1 3s ease forwards;
}
@keyframes ObrKrzy1 {
  0% {
    transform: translate(-50%, -50%) rotate(-45deg);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) rotate(3555deg);
    opacity: 0;
  }
}

.circleWin span:nth-child(2) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 190px;
  height: 5px;
  background: white;
  animation: ObrKrzy2 3s ease forwards;
}
@keyframes ObrKrzy2 {
  0% {
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) rotate(3645deg);
    opacity: 0;
  }
}

.circleWin span:nth-child(3) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 190px;
  height: 190px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  animation: ObrKrzy3 3s ease-in forwards;
}
.circleWin span:nth-child(4) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 165px;
  height: 165px;
  background: black;
  border-radius: 50%;
  opacity: 0;
  z-index: 100;
  animation: ObrKrzy3 3s ease-in forwards;
}
@keyframes ObrKrzy3 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
