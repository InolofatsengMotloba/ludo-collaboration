import {UI} from './UI.js'

export class Ludo {
        currentPositions = {
                P1: [],
                P2: []
        }
        diceValue;
        get diceValue() {
                return thid._diceValue;
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
               this. _turn = value;
               UI.setTurn(value);
        }
        constructor () {
                console.log('Hello World! Lets play Ludo');
                this.diceValue = 4;
                this.turn = 0;
        }
}