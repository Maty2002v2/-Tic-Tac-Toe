<template>
  <div>
    <the-select-mode />
    <the-game v-if="modeName" />
    <div class="container" id="icons">
      <div class="row">
        <div class="span3" title="Code: 0xe800">
          <i class="demo-icon icon-users">&#xe800;</i>
          <span class="i-name">icon-users</span
          ><span class="i-code">0xe800</span>
        </div>
        <div class="span3" title="Code: 0xe801">
          <i class="demo-icon icon-user">&#xe801;</i>
          <span class="i-name">icon-user</span
          ><span class="i-code">0xe801</span>
        </div>
        <div class="span3" title="Code: 0xe802">
          <i class="demo-icon icon-cancel">&#xe802;</i>
          <span class="i-name">icon-cancel</span
          ><span class="i-code">0xe802</span>
        </div>
        <div class="span3" title="Code: 0xe803">
          <i class="demo-icon icon-user-1">&#xe803;</i>
          <span class="i-name">icon-user-1</span
          ><span class="i-code">0xe803</span>
        </div>
      </div>
      <div class="row">
        <div class="span3" title="Code: 0xe804">
          <i class="demo-icon icon-user-outline">&#xe804;</i>
          <span class="i-name">icon-user-outline</span
          ><span class="i-code">0xe804</span>
        </div>
        <div class="span3" title="Code: 0xe805">
          <i class="demo-icon icon-cancel-1">&#xe805;</i>
          <span class="i-name">icon-cancel-1</span
          ><span class="i-code">0xe805</span>
        </div>
        <div class="span3" title="Code: 0xe806">
          <i class="demo-icon icon-cancel-outline">&#xe806;</i>
          <span class="i-name">icon-cancel-outline</span
          ><span class="i-code">0xe806</span>
        </div>
        <div class="span3" title="Code: 0xe807">
          <i class="demo-icon icon-smiley">&#xe807;</i>
          <span class="i-name">icon-smiley</span
          ><span class="i-code">0xe807</span>
        </div>
      </div>
      <div class="row">
        <div class="span3" title="Code: 0xf10c">
          <i class="demo-icon icon-circle-empty">&#xf10c;</i>
          <span class="i-name">icon-circle-empty</span
          ><span class="i-code">0xf10c</span>
        </div>
        <div class="span3" title="Code: 0xf2c0">
          <i class="demo-icon icon-user-o">&#xf2c0;</i>
          <span class="i-name">icon-user-o</span
          ><span class="i-code">0xf2c0</span>
        </div>
        <div class="span3" title="Code: 0xf300">
          <i class="demo-icon icon-github">&#xf300;</i>
          <span class="i-name">icon-github</span
          ><span class="i-code">0xf300</span>
        </div>
        <div class="span3" title="Code: 0xf308">
          <i class="demo-icon icon-github-1">&#xf308;</i>
          <span class="i-name">icon-github-1</span
          ><span class="i-code">0xf308</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { storeToRefs } from "pinia";
import { useGameModeStore } from "./stores/GameModeStore";

import TheGame from "./components/TheGame.vue";
import TheSelectMode from "./components/gameMode/TheSelectMode.vue";

import "animate.css";
import "@/styles/GlobalStyles.css";
import "@/icons/css/fontello.css";

export default defineComponent({
  name: "App",
  components: {
    TheGame,
    TheSelectMode,
  },
  setup() {
    const { modeName } = storeToRefs(useGameModeStore());

    return { modeName };
  },
});
</script>
