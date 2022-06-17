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

      getPlayerMovements.value.forEach(
        (array) => (concatArrays = concatArrays.concat(array))
      );

      circles = giveOnlyIndexesSelectedCharacter("circle", concatArrays);
      crosses = giveOnlyIndexesSelectedCharacter("cross", concatArrays);

      if (willItWin(circles, getCombinationsWon.value)) {
        setResult("circle");
        return;
      }

      if (willItWin(crosses, getCombinationsWon.value)) {
        setResult("cross");
        return;
      }

      if (concatArrays.filter((el) => el).length === 9) {
        setResult("tie");
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
        return combinationsWon.find((el) => {
          return Array.of(...el).every((e) => indexesChar.includes(e));
        });
      }
    },
    { deep: true }
  );
});
