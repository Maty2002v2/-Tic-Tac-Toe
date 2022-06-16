import { defineStore } from "pinia";
import CharType from "../types/CharType";

export const useMainStore = defineStore("Main", {
  state: () => {
    return {
      charState: "circle" as CharType,
    };
  },
  getters: {
    getCharState: (state) => state.charState,
  },
  actions: {
    changeCharState(value: CharType) {
      this.charState = value;
    },
  },
});
