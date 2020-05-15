
export default class GameController{
    static squaresClicked = 0;
    static winCondition;
    constructor(rows, columns, bombs) {
        GameController.winCondition = rows*columns-bombs;
        console.log('Game initialized with win condition: ' + GameController.winCondition);
    }

    static checkWin(){
        if(GameController.squaresClicked === this.winCondition){
            console.log('Player wins!');
        }
    }

    


}