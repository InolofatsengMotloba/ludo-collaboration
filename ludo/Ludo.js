<<<<<<< HEAD
import { UI } from "./UI.js";

export class Ludo {
  constructor() {
    console.log("Hello World! Lets play Ludo!");
=======
//Import th eUI module from the specified path
import { UI } from "./UI.js";

//Define the Ludo class
export class Ludo {
  //Initialized the current positions of players P1 and P2 as empty arrays
  currentPositions = {
    P1: [],
    P2: [],
  };
  //Place holder for the dice value
  diceValue;

  //Getter for diceValue
  get diceValue() {
    return thid._diceValue;
  }
  //Setter for diceValue, updates the dice value and calls UI method to set it
  set diceValue(value) {
    this._diceValue = value;

    UI.setDiceValue(value);
  }

  //Placeholder for the current turn
  _turn;

  //Getter for the turn
  get turn() {
    return this._turn;
  }

  //Setter for the turn, updates the turn and calls UI method to set it
  set turn(value) {
    this._turn = value;
    UI.setTurn(value);
  }
  //Placeholder for the game state
  _state;

  //Getter for the state
  get state() {
    return this._state;
  }

  //Setter for the State, updates the state and enables/disables the dice in the UI accordingly
  set state(value) {
    this._state = value;

    if (value === STATE.DICE_NOT_ROLLED) {
      UI.enableDice();
    } else {
      UI.disableDice();
    }
  }

  //Cosntructor for the Ludo class
  constructor() {
    console.log("Hello World! Lets play Ludo");

    // this.diceValue = 4;
    // this.turn = 0;
    // this.state = STATE.DICE_ROLLED;
  }
  //Method to add event listener for the dice click
  listenDiceClick() {
    UI.listenDiceClick(this.onDiceClick.bind(this));
  }
//Handler for dice click event
  onDiceClick() {
    console.log("dice clicked!");
>>>>>>> 7b7644cece320099e620e1adcb74c23dacfe437e
  }
}
