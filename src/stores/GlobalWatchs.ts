import { defineStore, storeToRefs } from "pinia";
import { watch } from "vue";
import { useResaltsStore } from "@/stores/ResaltsStore";

import CharType from "@/types/CharType";

export const useGlobalWatchs = defineStore("GlobalWatchs", () => {
  const { getCombinationsWon, getPlayerMovements } = storeToRefs(
    useResaltsStore()
  );
  const { setResult } = useResaltsStore();

  watch(
    getPlayerMovements,
    () => {
      let concatArrays: CharType[] = [];
      let circles: number[] = [];
      let crosses: number[] = [];
      let winCombination: number[] | undefined = [];

      getPlayerMovements.value.forEach(
        (array) => (concatArrays = concatArrays.concat(array))
      );

      circles = giveOnlyIndexesSelectedCharacter("circle", concatArrays);
      crosses = giveOnlyIndexesSelectedCharacter("cross", concatArrays);

      if ((winCombination = willItWin(circles, getCombinationsWon.value))) {
        setResult("circle", winCombination);
        return;
      }

      if ((winCombination = willItWin(crosses, getCombinationsWon.value))) {
        setResult("cross", winCombination);
        return;
      }

      if (concatArrays.filter((el) => el).length === 9) {
        setResult("tie", []);
        return;
      }

      function giveOnlyIndexesSelectedCharacter(
        char: CharType,
        array: CharType[]
      ): number[] {
        return array
          .map((el, index) => (el === char ? index + 1 : -1))
          .filter((el) => el > -1);
      }

      function willItWin(indexesChar: number[], combinationsWon: number[][]) {
        return combinationsWon.find((combination) => {
          return Array.of(...combination).every((e) => indexesChar.includes(e));
        });
      }
    },
    { deep: true }
  );
});
