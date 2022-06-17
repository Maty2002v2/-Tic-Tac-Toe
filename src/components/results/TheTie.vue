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
.tie {
  width: 400px;
  z-index: -2;
  animation: EndRemis 2s forwards;
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
@keyframes EndRemis {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.tie span:nth-child(1) {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.tie span:nth-child(2) {
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: white;
  animation: EndRemis1 5s ease forwards 0.2s;
}
@keyframes EndRemis1 {
  0% {
    left: 50%;
  }
  100% {
    left: 27%;
  }
}

.tie span:nth-child(2) span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 165px;
  height: 165px;
  background: black;
  border-radius: 50%;
}
.tie span:nth-child(3) {
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 190px;
  height: 8px;
  background: white;
  border-radius: 5px;
  z-index: -1;
  animation: EndRemis2 5s ease forwards 0.2s;
}
@keyframes EndRemis2 {
  0% {
    left: 50%;
  }
  100% {
    left: 73%;
  }
}

.tie span:nth-child(4) {
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 190px;
  height: 8px;
  background: white;
  border-radius: 5px;
  z-index: -1;
  animation: EndRemis2 5s ease forwards 0.2s;
}
</style>
