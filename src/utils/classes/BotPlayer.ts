import CharType from "@/types/CharType";
import RecognizeCharType from "@/types/RecognizeCharType";

class BotPlayer {
  private board: CharType[][] = [];
  private myChar: CharType = "";
  private opponentChar: CharType = "";
  constructor(board: CharType[][], char: CharType) {
    this.board = board;

    const { myChar, opponentChar } = this.recognizeChar(char);
    this.myChar = myChar;
    this.opponentChar = opponentChar;
  }

  private recognizeChar(char: CharType): RecognizeCharType {
    if (char === "circle") {
      return { myChar: "circle", opponentChar: "cross" };
    } else {
      return { myChar: "cross", opponentChar: "circle" };
    }
  }

  private win(): boolean {
    // console.log("1. Wygraj - sprawdzam");
    const result = this.winOrBlock(this.board, this.myChar);
    if (!result) {
      console.log("Przechodzę dalej");
      return false;
    } else {
      console.log(`Wygrywam stawiając kółko na (${result})`);
      return true;
    }
  }

  private block(): boolean {
    // console.log("2. Zablokuj - sprawdzam");
    const result = this.winOrBlock(this.board, this.opponentChar);
    if (!result) {
      console.log("Przechodzę dalej");
      return false;
    } else {
      console.log(`Blokuję stawiając kółko na (${result})`);
      return true;
    }
  }

  fork() {
    // console.log("3. Zrób rozgałęzienie - sprawdzam");
    const result = this.checkFork(this.board, this.myChar);
    if (!result) {
      console.log("Przechodzę dalej", result);
      return false;
    } else {
      console.log(`Robię rozgałęzienie stawiając kółko na (${result})`);
      return true;
    }
  }

  blockFork(): boolean {
    // console.log("4. Zrób blokujące rozgałęzienie - sprawdzam");
    const result = this.checkFork(this.board, this.opponentChar);
    console.log(result ? "tak" : "nie", result);
    if (!result) {
      console.log("Przechodzę dalej");
      return false;
    }
    console.log(`Wolny punkt przecięcia na (${result}), sprawdzam dalej`);
    // sprawdźmy czy mozemy zmusić przeciwnika do blokowania
    const twoInARowResult = this.checkTwoInARow(this.board, this.myChar);
    if (twoInARowResult) {
      console.log(
        `Zmuszam do blokady, stawiając na (${result})`,
        twoInARowResult
      );
      //   return twoInARowResult;
      return true;
    }
    // jezeli nie, to zwracamy miejsce przecięcia aby zablokować przeciwnika
    console.log(
      "Blokuję rozgałęzienie stawiając na punkcie przecięcia",
      result
    );
    return true;
  }

  private center(): boolean {
    // console.log("5. Zagraj środek - sprawdzam");
    const result = !this.board[1][1] ? [1, 1] : null;

    if (result) {
      console.log("Gram na środku");
      return true;
    } else {
      console.log("Przechodzę dalej");
      return false;
    }
  }

  private oppositeCorner(): boolean {
    // console.log("6. Zagraj przeciwny narożnik - sprawdzam");
    // sprawdzamy czy na przeciwko zajetego naroznika jest wolny
    let result = null;
    if (!this.board[0][0] && this.board[2][2] === this.opponentChar) {
      result = [0, 0];
    } else if (!this.board[2][2] && this.board[0][0] === this.opponentChar) {
      result = [2, 2];
    } else if (!this.board[0][2] && this.board[2][0] === this.opponentChar) {
      result = [0, 2];
    } else if (!this.board[2][0] && this.board[0][2] === this.opponentChar) {
      result = [2, 0];
    }

    if (result) {
      console.log(`Gram na przeciwnym narożniku (${result})`);
      return true;
    } else {
      console.log("Przechodzę dalej");
      return false;
    }
  }

  private emptyCorner(): boolean {
    // console.log("7. Zagraj pusty narożnik - sprawdzam");
    // szukamy pusty naroznik
    let result = null;
    if (!this.board[0][0]) {
      result = [0, 0];
    } else if (!this.board[2][0]) {
      result = [2, 0];
    } else if (!this.board[2][2]) {
      result = [2, 2];
    } else if (!this.board[0][2]) {
      result = [0, 2];
    }

    if (result) {
      console.log(`Gram na pustym narożniku (${result})`);
      return true;
    } else {
      console.log("Przechodzę dalej");
      return false;
    }
  }

  private emptySide(): boolean {
    // console.log("8. Zagraj pusty bok - sprawdzam");
    // szukamy pustych bokow
    let result = null;
    if (!this.board[0][1]) {
      result = [0, 1];
    } else if (!this.board[1][2]) {
      result = [1, 2];
    } else if (!this.board[2][1]) {
      result = [2, 1];
    }
    // jedyne pole, które pozostaje wolne
    else if (!this.board[1][0]) {
      result = [1, 0];
    }

    if (result) {
      console.log(`Gram pusty bok (${result})`);
      return true;
    } else {
      // błędna sytuacja, nie powinna się zdarzyć
      console.log("Brak ruchu!");
      return false;
    }
  }

  private winOrBlock(
    board: CharType[][],
    char: CharType
  ): number[] | undefined {
    // wygrywanie i blokowanie opieraja sie na tej samej logice wiec uwspolniamy kod
    for (let i = 0; i < 3; i++) {
      // petla sprawdzajaca rownoczesnie kolumny i wiersze
      if (board[i][0] === char && board[i][1] === char && !board[i][2]) {
        return [i, 2];
      }
      if (board[i][0] === char && !board[i][1] && board[i][2] === char) {
        return [i, 1];
      }
      if (!board[i][0] && board[i][1] === char && board[i][2] === char) {
        return [i, 0];
      }
      if (board[0][i] === char && board[1][i] === char && !board[2][i]) {
        return [2, i];
      }
      if (board[0][i] === char && !board[1][i] && board[2][i] === char) {
        return [1, i];
      }
      if (!board[0][i] && board[1][i] === char && board[2][i] === char) {
        return [0, i];
      }
    }

    // sprawdzenie przekatnych
    if (board[0][0] === char && board[1][1] === char && !board[2][2]) {
      return [2, 2];
    }
    if (board[0][0] === char && !board[1][1] && board[2][2] === char) {
      return [1, 1];
    }
    if (!board[0][0] && board[1][1] === char && board[2][2] === char) {
      return [0, 0];
    }
    if (board[0][2] === char && board[1][1] === char && !board[2][0]) {
      return [2, 0];
    }
    if (board[0][2] === char && !board[1][1] && board[2][0] === char) {
      return [1, 1];
    }
    if (!board[0][2] && board[1][1] === char && board[2][0] === char) {
      return [0, 2];
    }
  }

  checkFork(board: CharType[][], char: CharType) {
    // rozgalezienie i rozgalezienie blokujace rowniez opieraja sie na tej samej logice, wiec uwspolniamy

    // dzięki temu zbiorowi, nie będziemy sprawdzać kilkakrotnie tych samych miejsc
    const invalidCols = new Set();

    // będziemy potrzebować informację na temat stanu przekątnych, tutaj sobie to obliczymy
    const { isDiag1Valid, isDiag2Valid } = this.checkForkDiagonals(board, char);

    // właściwa pętla sprawdzająca kolumny i wiersze
    for (let i = 0; i < 3; i++) {
      let rowInvalid = false;
      for (let j = 0; j < 3 && !rowInvalid; j++) {
        // sprawdzamy przeciecia kolumn i wierszy
        // miejsce przeciecia musi byc puste oraz sprawdzamy czy juz wczesniej nie zauwazylismy, ze kolumna nie spelnia wymagan
        if (board[i][j] != "" || invalidCols.has(j)) {
          continue;
        }
        let mineCountRow = 0;
        let mineCountCol = 0;
        let emptyCountRow = 0;
        let emptyCountCol = 0;
        for (let k = 0; k < 3; k++) {
          // liczymy czy przecinające się wiersz i kolumna spełniają warunki
          if (board[i][k] === char) {
            mineCountRow++;
          } else if (!board[i][k]) {
            emptyCountRow++;
          }
          if (board[k][j] === char) {
            mineCountCol++;
          } else if (!board[k][j]) {
            emptyCountCol++;
          }
        }
        if (
          emptyCountRow === 2 &&
          emptyCountCol === 2 &&
          mineCountCol === 1 &&
          mineCountRow === 1
        ) {
          return [i, j];
        }
        if (emptyCountRow !== 2 && mineCountRow !== 1) {
          // wiersz jest nieprawidlowy, wiec go oznaczamy zeby nie sprawdzac go ponownie
          rowInvalid = true;
        }
        if (emptyCountCol !== 2 && mineCountCol !== 1) {
          // kolumna jest nieprawidlowa, wiec ja oznaczamy zeby nie sprawdzac jej ponownie
          invalidCols.add(j);
        }
      }
      // wykorzystujemy zewnętrzną pętlę, aby wykonać iteracje z przekątnymi, zarówno dla kolumn jak i wierszy
      // sprawdzamy przeciecia wiersza z przekatnymi
      if (!rowInvalid) {
        if (isDiag1Valid && !board[i][i]) {
          //   return board[i][i];
          return [i][i];
        }
        if (isDiag2Valid && !board[i][2 - i]) {
          //   return board[i][2 - i];
          return [i][2 - i];
        }
      }
      // sprawdzamy przeciecia kolumny z przekatnymi
      if (!invalidCols.has(i)) {
        if (isDiag1Valid && !board[i][i]) {
          //   return board[i][i];
          return [i][i];
        }
        if (isDiag2Valid && !board[2 - i][i]) {
          //   return board[2 - i][i];
          return [2 - i][i];
        }
      }
    }

    if (!board[1][1] && isDiag1Valid && isDiag2Valid) {
      // sprawdzamy przecięcie przekątnych
      return [1, 1];
    }

    return null;
  }

  checkForkDiagonals(board: CharType[][], char: CharType) {
    // funkcja pomocnicza do sprawdzenia przekątnych, czy spełniają warunki dla rozgałęzienia
    let emptyCount1 = 0;
    let emptyCount2 = 0;
    let mineCount1 = 0;
    let mineCount2 = 0;

    for (let i = 0; i < 3; i++) {
      if (!board[i][i]) {
        emptyCount1++;
      } else if (board[i][i] === char) {
        mineCount1++;
      }
      if (!board[i][2 - i]) {
        emptyCount2++;
      } else if (board[i][2 - i] === char) {
        mineCount2++;
      }
    }

    return {
      isDiag1Valid: emptyCount1 === 2 && mineCount1 === 1,
      isDiag2Valid: emptyCount2 === 2 && mineCount2 === 1,
    };
  }

  checkTwoInARow(board: CharType[][], char: CharType) {
    // sprawdzenie czy mozemy utworzyć sytuację dwa-pod-rząd
    for (let i = 0; i < 3; i++) {
      // najpierw sprawdzamy wiersze i kolumny
      if (!board[i][0] && !board[i][1] && board[i][2] === char) {
        return [i, 1];
      }
      if (!board[i][0] && board[i][1] === char && !board[i][2]) {
        return [i, 0];
      }
      if (board[i][0] === char && !board[i][1] && !board[i][2]) {
        return [i, 1];
      }
      if (!board[0][i] && !board[1][i] && board[2][i] === char) {
        return [1, i];
      }
      if (!board[0][i] && board[1][i] === char && !board[2][i]) {
        return [0, i];
      }
      if (board[0][i] === char && !board[1][i] && !board[2][i]) {
        return [1, i];
      }
    }
    // sprawdzamy przekątne
    if (!board[0][0] && !board[1][1] && board[2][2] === char) {
      return [1, 1];
    }
    if (!board[0][0] && board[1][1] === char && !board[2][2]) {
      return [2, 2];
    }
    if (board[0][0] === char && !board[1][1] && !board[2][2]) {
      return [1, 1];
    }
    if (!board[0][2] && !board[1][1] && board[2][0] === char) {
      return [1, 1];
    }
    if (!board[0][2] && board[1][1] === char && !board[2][0]) {
      return [2, 0];
    }
    if (board[0][2] === char && !board[1][1] && !board[2][0]) {
      return [1, 1];
    }

    return null;
  }

  public move(): boolean {
    return (
      this.win() ||
      this.block() ||
      this.fork() ||
      this.blockFork() ||
      this.center() ||
      this.oppositeCorner() ||
      this.emptyCorner() ||
      this.emptySide()
    );
  }
}

export default BotPlayer;
