<template>
  <div>
    <whose-turn />
    <the-board-game />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheBoardGame from "./components/TheBoardGame.vue";
import WhoseTurn from "./components/WhoseTurn.vue";

export default defineComponent({
  name: "App",
  components: {
    TheBoardGame,
    WhoseTurn,
  },
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
