import React, {useState} from "react";
import Square from "./Square";
import VirtualSquare from './VirtualSquare'
import GameController from "./GameController";

export default function Board(){
    let h =10;
    let w = 10;
    let virtualBoard = [];
    let bombs = 30;

    let game = new GameController(w,h,bombs);

    function fillVirtual(){
        for(let i = 0; i < w; i++){
            let newRow = [];
            for (let j = 0; j < h; j++){
                let v = new VirtualSquare(i*w+j, false);
                newRow.push(v)
            }

            virtualBoard.push(newRow);
        }

        //assign bombs
        for (let i = 0; i < bombs; i++){
            let placed = false;

            while(!placed){
                let randomSpot = Math.floor(Math.random()*h*w);
                const [x,y] = getLocation(randomSpot);

                if(!virtualBoard[y][x].hasBomb()){  //if there aint no bomb
                    placed = true;
                    virtualBoard[y][x].setBomb(true);

                    //increment count of surrounding bomb number
                    for (let newX = x-1; newX < x+2; newX++){
                        for (let newY = y-1; newY < y+2; newY++){
                            try{
                                virtualBoard[newY][newX].increment();
                            }
                            catch (e) {
                                console.log('Edge');
                            }
                        }
                    }
                }
            }
        }

        console.log(virtualBoard);
    }

    //Helper to get exact location of spot based on given number
    function getLocation(num){
        let y = Math.floor(num/w);
        let x = num%w;

        // console.log('Location of ' + num + ' |' + x + ',' + y + '|');
        return [x,y];
    }

    function buildRow(rowLength, count){
        let returnResult = [];
        for (let i = count; i < count + rowLength; i++){
            const [x,y] = getLocation(i);
            let virt = virtualBoard[y][x];
            console.log(virt);
            returnResult.push(<Square name={virt.getName().toString()}
                                      bomb={virt.hasBomb()}
                                      num={virt.getNum()}/>);
        }

        return (
            <div className='row'>
                {returnResult}
            </div>
        );
    }

    function fillBoard(rowLength = 10, columnLength = 10){
        let returnResult =[];

        fillVirtual();

        for (let i = 0; i < columnLength; i++){
            returnResult.push(buildRow(rowLength, rowLength*i));
        }

        console.log(returnResult);
        return returnResult;
    }

    return(
        <div className='board'>
            {fillBoard()}
            <div className='row'>
                <div id='displayMessage'>
                    Hi
                </div>
            </div>
        </div>
    )
}

