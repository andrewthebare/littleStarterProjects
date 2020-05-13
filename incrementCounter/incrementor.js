let incrementor = 1;
let displayValue = 1;

function increment(bAdd){
    bAdd ? displayValue += incrementor : displayValue-=incrementor;

    document.getElementById('number').innerHTML = displayValue;
}

function setIncrement(){
    incrementor = parseInt(document.getElementById('input').value,10);
    console.log(incrementor);
}