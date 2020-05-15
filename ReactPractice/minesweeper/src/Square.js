import React, {useState} from "react";
import GameController from './GameController'

import './baseStyle.css'

export default function Square(props) {
    const[display, setDisplay] = useState('');
    const preventDefault = (e) => { e.preventDefault();    };

    function displayBomb(){
        if (display === ''){
            if (props.bomb.toString() === 'true'){
                return 'X'
            }
            else {
                GameController.squaresClicked++;
                console.log('moves done: '+ GameController.squaresClicked);

                GameController.checkWin();

                return props.num;
            }
        }else{
            return display;
        }
    }

    function rightClick(e){
        preventDefault(e);
        if(display === ''){
            setDisplay('-');
        }else if (display === '-'){
            setDisplay('');
        }
    }

    return(
        <div id={props.name} className='square'
             onClick={() => setDisplay(displayBomb())} onContextMenu={rightClick}>
            {display}
        </div>
    )
}