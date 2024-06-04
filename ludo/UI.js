import { COORDINATES_MAP } from './constants.js'

const diceButtonElement = document.querySelector ('#dice-btn');
const playerPiecesElements = {
        P1: document.querySelectorAll('[player-id="P1"].player-piece'),
        P2: document.querySelectorAll('[player-id="P2"].player-piece'),
}
export class UI {
        static listenDiceClick(callback) {
                diceButtonElement.addEventListener('click', callback);
        }
        
        static listenResetClick(callback) {
                document.querySelector('button#reset-btn').addEventListener('click', callback);
        }
        static listenPieceClick(callback) {
                document.querySelector('.player-pieces').addEventListener('click', callback);
        }

         /**
         * 
         * @param {string} player
         * @param {Number} piece
         * @param {Number} newPosition
         */
         setPiecePosition(player, piece, newPosition) {
                if(!playerPiecesElements[player] || !playerPiecesElements[player][piece]) {
                        console.error(`Player element of given player: ${player} and piece ${piece} not found`);
                        return;
                }
               const[x, y] = COORDINATES_MAP[newPosition];

               const pieceElement = playerPiecesElements[player][piece];
               pieceElement.style.top = y * STEP_Length + '%';
               pieceElement.style.left = x * STEP_Length + '%';

         }
}