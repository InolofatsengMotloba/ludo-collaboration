import { COORDINATES_MAP, PLAYERS, STEP_LENGTH } from "./constants.js";

const diceButtonElement = document.querySelector("#dice-btn");
const playerPiecesElements = {
  P1: document.querySelectorAll('[player-id="P1"].player-piece'),
  P2: document.querySelectorAll('[player-id="P2"].player-piece'),
};

export class UI {
  static listenDiceClick(callback) {
    diceButtonElement.addEventListener("click", callback);
  }

  static listenResetClick(callback) {
    document
      .querySelector("button#reset-btn")
      .addEventListener("click", callback);
  }
  static listenPieceClick(callback) {
    document
      .querySelector(".player-pieces")
      .addEventListener("click", callback);
  }

  /**
   *
   * @param {string} player
   * @param {Number} piece
   * @param {Number} newPosition
   */
  static setPiecePosition(player, piece, newPosition) {
    if (!playerPiecesElements[player] || !playerPiecesElements[player][piece]) {
      console.error(
        `Player element of given player: ${player} and piece: ${piece} not found`
      );
      return;
    }

    const [x, y] = COORDINATES_MAP[newPosition];

    const pieceElement = playerPiecesElements[player][piece];
    pieceElement.style.top = y * STEP_LENGTH + "%";
    pieceElement.style.left = x * STEP_LENGTH + "%";
  }

  static setTurn(index) {
    if (index < 0 || index >= PLAYERS.length) {
      console.error("index out of bound!");
      return;
    }

    const player = PLAYERS[index];

    // Display player ID
    document.querySelector(".active-player span").innerText = player;

    // Highlight
    document
      .querySelector(`[player-id="${player}"].player-base`)
      .classList.add("highlight");
  }
  
}

UI.setPiecePosition('P1', 0, 0);
UI.setTurn(0);

