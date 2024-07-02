<<<<<<< HEAD
import { COORDINATES_MAP, PLAYERS, STEP_LENGTH } from "./constants.js";

const diceButtonElement = document.querySelector("#dice-btn");
=======
//Import the COORDINATES_MAP from the constants module
import { COORDINATES_MAP } from "./constants.js";

//Select the dice button element from the DOM
const diceButtonElement = document.querySelector("#dice-btn");
//Select the player pieces elements for player P1 and P2 from the DOM
>>>>>>> 7b7644cece320099e620e1adcb74c23dacfe437e
const playerPiecesElements = {
  P1: document.querySelectorAll('[player-id="P1"].player-piece'),
  P2: document.querySelectorAll('[player-id="P2"].player-piece'),
};

<<<<<<< HEAD
export class UI {
  static listenDiceClick(callback) {
    diceButtonElement.addEventListener("click", callback);
  }

=======
//Define the UI class
export class UI {
  //Statric method to listen for dice click events and call the provided callback
  static listenDiceClick(callback) {
    diceButtonElement.addEventListener("click", callback);
  }
// Static method to listen for reset button click events and call the provided callback
>>>>>>> 7b7644cece320099e620e1adcb74c23dacfe437e
  static listenResetClick(callback) {
    document
      .querySelector("button#reset-btn")
      .addEventListener("click", callback);
  }
<<<<<<< HEAD

=======
  //Static method to listen for player piece clic events and call the provided callback
>>>>>>> 7b7644cece320099e620e1adcb74c23dacfe437e
  static listenPieceClick(callback) {
    document
      .querySelector(".player-pieces")
      .addEventListener("click", callback);
  }

  /**
<<<<<<< HEAD
   *
=======
   *sets the position of a player's piece onthe board
>>>>>>> 7b7644cece320099e620e1adcb74c23dacfe437e
   * @param {string} player
   * @param {Number} piece
   * @param {Number} newPosition
   */
  static setPiecePosition(player, piece, newPosition) {
<<<<<<< HEAD
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

=======
    //Check if the player and piece exist
    if (!playerPiecesElements[player] || !playerPiecesElements[player][piece]) {
      console.error(
        `Player element of given player: ${player} and piece ${piece} not found`
      );
      return;
    }
    //Get the new coordinates from the COORDINATES_MAP
    const [x, y] = COORDINATES_MAP[newPosition];
    //Updates the piece element's position based on the coordinates
    const pieceElement = playerPiecesElements[player][piece];
    pieceElement.style.top = y * STEP_Length + "%";
    pieceElement.style.left = x * STEP_Length + "%";
  }
  //Static method to set the current turn based on the player index
  static setTurn(index) {
    //Check if the index is within bounds
    if (index < 0 || index >= PLAYERS.length) {
      console.error("index out of bound");
      return;
    }
    //Display player ID
    const player = PLAYERS[index];
    document.querySelector(".active-player span").innerText = player;

    // Remove the highlight from the previous active player base
    const activePlayerBase = document.querySelector("player-base.highlight");
    if (activePlayerBase) {
      activePlayerBase.classList.remove("highlight");
    }

    // Highlight the current active player base
    document
      .querySelector('player-id="${player}".player-base')
      .classList.add("highlight");
  }
  //Static method to disable the dice button
  static enableDice() {
    diceButtonElement.removeAttribute("disabled");
  }

  static disableDice() {
    diceButtonElement.setAttribute("disabled", "");
  }

  /**
   *Highlights the specifiesd pieces for a player
   * @param {string} player
   * @param {Number} pieces
   */
  static highlightPieces(player, pieces) {
    pieces.forEach((piece) => {
      const pieceElement = playerPiecesElements[player][piece];
      pieceElement.classList.add("highlight");
    });
  }

  //Static method to remove highlights from all pieces
  static unhighlightPieces() {
        document.querySelectorAll('.player-piece.highlight').forEach(ele => {
                ele.classList.remove('highlight');
        })
  }
  //Static method to set the displayed dice value
  static setDiceValue(value) {
        document.querySelector('.dice-value').innerText = value;
  }
}


// Example usage of the UI class methods 
// UI.setPiecePosition("P1", 0, 0);
// UI.setTurn(0);
// UI.setTurn(1);

// UI.disableDice();
// UI.enableDice();
// UI.highlightPieces('P1', [0]);
// UI.unhighlightPieces();
// UI.setDiceValue(5);
>>>>>>> 7b7644cece320099e620e1adcb74c23dacfe437e
