import { defineStore } from "pinia";
import GameModeType from "../types/GameModeType";

export const useGameModeStore = defineStore("GameMode", {
  state: () => {
    return {
      modeName: "" as GameModeType,
    };
  },
  getters: {
    getModeName: (state): GameModeType => state.modeName,
  },
  actions: {
    changeModeName(value: GameModeType) {
      return new Promise((resolve) => {
        this.modeName = value;
        resolve("");
      });
    },
  },
});
