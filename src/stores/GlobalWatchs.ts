import { watch } from "vue";

import { defineStore, storeToRefs } from "pinia";
import { useResaltsStore } from "@/stores/ResaltsStore";
import { useMainStore } from "@/stores/MainStore";
import { useGameModeStore } from "@/stores/GameModeStore";

import BotPlayer from "@/utils/classes/BotPlayer";

import CharType from "@/types/CharType";

export const useGlobalWatchs = defineStore("GlobalWatchs", () => {
  const { getCharState } = storeToRefs(useMainStore());
  const { changeCharState } = useMainStore();

  const { getCombinationsWon, getPlayerMovements } = storeToRefs(
    useResaltsStore()
  );
  const { makeMove, setResult } = useResaltsStore();

  const { modeName } = storeToRefs(useGameModeStore());

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
      // console.log(getPlayerMovements.value);

      changeCharState(getCharState.value === "circle" ? "cross" : "circle");
      console.log("elo", getCharState.value);

      if (modeName.value === "with bot") {
        if (getCharState.value === "cross") {
          // console.log(getCharState.value);
          const bot = new BotPlayer(getPlayerMovements.value, "cross").move();
          if (bot) {
            // console.log(bot[0], bot[1]);
            makeMove("cross", bot[0], bot[1]);
          }
        }
      }

      // console.log("zmiana");

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
