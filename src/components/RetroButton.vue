<template>
  <div class="retroButton">
    <button class="retroButton__button"><slot></slot></button>
    <span class="retroButton__span"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RetroButton",
});
</script>

<style scoped>
.retroButton {
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
}

.retroButton__button {
  position: relative;

  width: 100%;
  height: 100%;
  border: 1px solid white;
  border-radius: 5px;

  color: #ffffff;
  text-align: center;

  background: #000000;

  cursor: pointer;
  transition: all 0.2s linear;
}

.retroButton__button:hover {
  transform: translate(-8%, -8%);
}

.retroButton__span {
  position: absolute;
  top: 0;
  left: 0;

  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 5px;

  background: #ffffff;

  z-index: -1;
}
</style>
