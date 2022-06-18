import { defineStore } from "pinia";
import CharType from "../types/CharType";

export const useMainStore = defineStore("Main", {
  state: () => {
    return {
      charState: "circle" as CharType,
      isfinish: false,
    };
  },
  getters: {
    getCharState: (state): CharType => state.charState,
    getisfinish: (state): boolean => state.isfinish,
  },
  actions: {
    changeCharState(value: CharType) {
      this.charState = value;
    },
    changeisfinish(value: boolean) {
      this.isfinish = value;
    },
  },
});
