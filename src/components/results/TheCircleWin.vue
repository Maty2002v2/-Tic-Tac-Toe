<template>
  <div class="circleWin">
    <span></span><span></span><span></span><span></span>
    <div><p class="resultTitle">Win</p></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheCircleWin",
});
</script>

<style scoped>
@keyframes SpinFirstSpan {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(3555deg);
  }
}

@keyframes SpinSecendSpan {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(3645deg);
  }
}

.circleWin span {
  position: absolute;
  top: 50%;
  left: 50%;
  background: white;
  transform: translate(-50%, -50%);
}

.circleWin span:nth-child(1),
.circleWin span:nth-child(2),
.circleWin span:nth-child(3) {
  width: 190px;
  height: 5px;
}

.circleWin span:nth-child(1) {
  transform: rotate(-45deg);
  animation: SpinFirstSpan 3s ease forwards;
}

.circleWin span:nth-child(2) {
  transform: rotate(45deg);
  animation: SpinSecendSpan 3s ease forwards;
}

.circleWin span:nth-child(3),
.circleWin span:nth-child(4) {
  border-radius: 50%;
  opacity: 0;
  animation: showResult 3s ease-in forwards;
}

.circleWin span:nth-child(3) {
  height: 190px;
}
.circleWin span:nth-child(4) {
  width: 165px;
  height: 165px;
  background: black;
}
</style>
