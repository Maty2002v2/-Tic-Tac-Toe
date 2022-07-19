<template>
  <div class="container">
    <div class="selectMode">
      <h2 class="selectMode__h2">Select a game mode</h2>
      <button class="selectMode__button">1vs1</button
      ><button class="selectMode__button">Play with bot</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheSelectMode",
  components: {},
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;

  position: absolute;
  top: 40%;
  left: 50%;

  transform: translate(-50%, -50%);
}

.selectMode {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 150px;
  padding: 5px;
  box-sizing: border-box;
  border: 2px solid #ffffff;
  border-radius: 5px;
}

.selectMode__h2 {
  text-align: center;
  width: 100%;
}

.selectMode__button {
  text-align: center;
  position: relative;
  background: #000000;
  color: #ffffff;
  cursor: pointer;
  width: 50%;
  border: 1px solid white;
  transition: all 0.5s linear;
}

.selectMode__button::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  z-index: -1;
  transition: all 0.3s linear;
}

/* .selectMode__button:hover {
  transform: translate(-20%, -20%);
} */

.selectMode__button:hover::after {
  transform: translateY(15%);
  z-index: -1;
}
</style>
