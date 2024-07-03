import { UI } from "./UI.js";
import { STATE } from "./constants.js";

export class Ludo {
  currentPositions = {
    P1: [],
    P2: [],
  };

  _diceValue;
  get diceValue() {
    return this._diceValue;
  }
  set diceValue(value) {
    this._diceValue = value;

    UI.setDiceValue(value);
  }

  _turn;
  get turn() {
    return this._turn;
  }
  set turn(value) {
    this._turn = value;
    UI.setTurn(value);
  }

  _state;
  get state() {
    return this._state;
  }
  set state(value) {
    this._state = value;

    if (value === STATE.DICE_NOT_ROLLED) {
      UI.enableDice();
    } else {
      UI.disableDice();
    }
  }

  constructor() {
    console.log("Hello World! Lets play Ludo!");

    // this.diceValue = 4;
    // this.turn = 0;
    // this.state = STATE.DICE_ROLLED;
    this.listenDiceClick();
    this.listenResetClick();
    this.listenPieceClick();
  }

  listenDiceClick() {
    UI.listenDiceClick(this.onDiceClick.bind(this));
  }

  onDiceClick() {
    console.log("dice clicked!");
  }

  listenResetClick() {
    UI.listenResetClick(this.resetGame.bind(this));
  }

  resetGame() {
    console.log("reset game!");
  }

  listenPieceClick() {
    UI.listenPieceClick(this.onPieceClick.bind(this));
  }

  onPieceClick() {
    console.log("piece clicked!");
  }
}
