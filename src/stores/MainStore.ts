import { defineStore } from "pinia";
import CharType from "../types/CharType";

export const useMainStore = defineStore("Main", {
  state: () => {
    return {
      charState: "circle" as CharType,
      finish: false,
    };
  },
  getters: {
    getCharState: (state): CharType => state.charState,
    getFinish: (state): boolean => state.finish,
  },
  actions: {
    changeCharState(value: CharType) {
      this.charState = value;
    },
    setFinish(value: boolean) {
      this.finish = value;
    },
  },
});
