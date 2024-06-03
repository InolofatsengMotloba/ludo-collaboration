const diceButtonElement = document.querySelector ('#dice-btn');
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
                
         }
}