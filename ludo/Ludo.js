import { UI } from "./UI.js";
import {
  BASE_POSITIONS,
  HOME_ENTRANCE,
  PLAYERS,
  STATE,
  TURNING_POINTS,
} from "./constants.js";

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
    this.setPiecePosition("P2", 0, 51);
  }

  listenDiceClick() {
    UI.listenDiceClick(this.onDiceClick.bind(this));
  }

  onDiceClick() {
    console.log("dice clicked!");
    this.diceValue - Math.floor(Math.random() * 7);
    this.state = STATE.DICE_ROLLED;
  }

  listenResetClick() {
    UI.listenResetClick(this.resetGame.bind(this));
  }

  resetGame() {
    console.log("reset game!");
    this.currentPositions = structuredClone(BASE_POSITIONS);

    PLAYERS.forEach((player) => {
      [0, 1, 2, 3].forEach((piece) => {
        this.setPiecePosition(
          player,
          piece,
          this.currentPositions[player][piece]
        );
      });
    });
  }

  listenPieceClick() {
    UI.listenPieceClick(this.onPieceClick.bind(this));
  }

  onPieceClick(event) {
    const target = event.target;

    if (!target.classList.contains("player-piece")) {
      return;
    }
    console.log("piece clicked!");

    const player = target.getAttribute("player-id");
    const piece = target.getAttribute("piece");
    this.handlePieceClick(player, piece);
  }

  handlePieceClick(player, piece) {
    console.log(player, piece);

    this.movePiece(player, piece, 5);
  }

  setPiecePosition(player, piece, newPosition) {
    this.currentPositions[player][piece] = newPosition;
    UI.setPiecePosition(player, piece, newPosition);
  }

  movePiece(player, piece, moveBy) {
    // this.setPiecePosition(
    //   player,
    //   piece,
    //   this.currentPositions[player][piece] + moveBy
    // );
    const interval = setInterval(() => {
      this.incrementPiecePositin(player, piece);
      moveBy--;

      if (moveBy === 0) {
        clearInterval(interval);
      }
    }, 200);
  }

  incrementPiecePositin(player, piece) {
    this.setPiecePosition(
      player,
      piece,
      this.getIncrementedPosition(player, piece)
    );
  }

  getIncrementedPosition(player, piece) {
    const currentPosition = this.currentPositions[player][piece];

    if (currentPosition === TURNING_POINTS[player]) {
      return HOME_ENTRANCE[player][0];
    } else if (currentPosition === 51) {
      return 0;
    }
    return currentPosition + 1;
  }
}
