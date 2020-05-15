

export default class VirtualSquare{

    constructor(squareName, hasBomb) {
        this.squareName = squareName;
        this.bomb = hasBomb;
        this.num = 0;
    }

    getName(){
        return this.squareName;
    }

    increment(){
        this.num++;
    }

    getNum(){
        return this.num;
    }

    hasBomb(){
        return this.bomb;
    }

    setBomb(b){
        this.bomb = b;
        console.log('Set Bomb at ' + this.getName());
    }


}