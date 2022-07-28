<template>
  <div class="result">
    <div class="result--circle" v-show="getResult === 'circle'">
      <span></span><span></span><span></span><span></span>
    </div>
    <div class="result--corss" v-show="getResult === 'cross'"></div>
    <div class="result--tie" v-show="getResult === 'tie'">
      <span></span><span></span><span></span>
    </div>
    <transition>
      <p class="resultTitle" v-show="getResult.length">{{ resultText }}</p>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { storeToRefs } from "pinia";
import { useResaltsStore } from "../stores/ResaltsStore";

export default defineComponent({
  name: "TheResult",
  setup() {
    const { getResult } = storeToRefs(useResaltsStore());

    const resultText = computed(() => {
      return getResult.value === "tie" ? "Tie" : `Win ${getResult.value}`;
    });

    return { getResult, resultText };
  },
});
</script>

<style scoped>
@keyframes ShowResult {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes CircleSpinFirstSpan {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(3555deg);
  }
}

@keyframes CircleSpinSecendSpan {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(3645deg);
  }
}

@keyframes CrossMoveBefore {
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

@keyframes CrossMoveAfter {
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

@keyframes TieMoveToRight {
  0% {
    left: 50%;
  }
  100% {
    left: 73%;
  }
}

@keyframes TieMoveToLeft {
  0% {
    left: 50%;
  }
  100% {
    left: 27%;
  }
}

.result--circle,
.result--corss,
.result--tie {
  position: relative;

  width: 200px;
  height: 500px;
  margin: 0 auto;

  text-align: center;
  color: white;
  font-size: 100px;
  font-size: 50px;

  background: black;
  overflow: hidden;

  animation: ShowResult 2s forwards;
}

/* circle */
.result--circle span {
  position: absolute;
  top: 50%;
  left: 50%;
  background: white;
  transform: translate(-50%, -50%);
}

.result--circle span:nth-child(1),
.result--circle span:nth-child(2),
.result--circle span:nth-child(3) {
  width: 190px;
  height: 5px;
}

.result--circle span:nth-child(1) {
  transform: rotate(-45deg);
  animation: CircleSpinFirstSpan 3s ease forwards;
}

.result--circle span:nth-child(2) {
  transform: rotate(45deg);
  animation: CircleSpinSecendSpan 3s ease forwards;
}

.result--circle span:nth-child(3),
.result--circle span:nth-child(4) {
  border-radius: 50%;
  opacity: 0;
  animation: ShowResult 3s ease-in forwards;
}

.result--circle span:nth-child(3) {
  height: 190px;
}
.result--circle span:nth-child(4) {
  width: 165px;
  height: 165px;
  background: black;
}

/* cross */
.result--corss::before,
.result--corss::after {
  content: "";

  position: absolute;
  top: 50%;
  left: 50%;

  width: 100%;
  height: 8px;
  border-radius: 5px;

  background: white;
}

.result--corss::before {
  animation: CrossMoveBefore 1.5s forwards;
}

.result--corss::after {
  transform-origin: left;
  transform: rotate(45deg) translate(-50%, -50%);
  animation: CrossMoveAfter 1.5s forwards;
}

/* tie */
.result--tie {
  width: 300px;
}

.result--tie span {
  position: absolute;
  top: 50%;
  left: 50%;
}

.result--tie span:nth-child(1) {
  width: 180px;
  height: 180px;
  border: 10px solid #ffffff;
  border-radius: 50%;
  box-sizing: border-box;

  background: transparent;

  transform: translate(-50%, -50%);

  animation: TieMoveToLeft 5s ease forwards 0.2s;
}

.result--tie span:nth-child(2),
.result--tie span:nth-child(3) {
  width: 190px;
  height: 8px;
  border-radius: 5px;

  background: white;

  z-index: -1;

  animation: TieMoveToRight 5s ease forwards 0.2s;
}

.result--tie span:nth-child(2) {
  transform: translate(-50%, -50%) rotate(45deg);
}

.result--tie span:nth-child(3) {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.resultTitle {
  position: absolute;
  left: 50%;
  font-size: 30px;
  transform: translate(-50%, -50%);
}

.v-enter-active {
  transition: opacity 4s ease;
}

.v-enter-from {
  opacity: 0;
}
</style>
