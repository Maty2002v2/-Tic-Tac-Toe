import { defineStore } from "pinia";
import { useMainStore } from "./MainStore";

import CharType from "../types/CharType";
import ResultType from "../types/ResultType";

export const useResaltsStore = defineStore("Resalts", {
  state: () => {
    return {
      playerMovements: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ] as CharType[][],
      combinationsWon: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
      ] as number[][],
      result: "" as ResultType,
    };
  },
  getters: {
    getPlayerMovements: (state): CharType[][] => state.playerMovements,
    getCombinationsWon: (state): number[][] => state.combinationsWon,
    getResult: (state): ResultType => state.result,
  },
  actions: {
    makeMove(value: CharType, row: number, column: number) {
      this.playerMovements[row][column] = value;
    },
    setResult(value: ResultType, winCombination: number[]) {
      const { setFinish } = useMainStore();

      if (winCombination.length) {
        const spans = document.querySelectorAll("div.boardGame__field > span");

        winCombination.forEach((spanIndex) =>
          spans[spanIndex - 1].classList.add("boardGame__field--winColor")
        );

        setFinish(true);
      }

      setTimeout(() => (this.result = value), 2000);

      setTimeout(() => window.location.reload(), 5000);
    },
  },
});
