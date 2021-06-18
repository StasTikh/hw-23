
function openGame() {
    let tag = document.querySelector('dialog');
    tag.showModal();
}

function closeGame() {
    let tag = document.querySelector('dialog');
    tag.close();
    document.getElementById('outAnswer').style.display = "none";
    guessCount = 0;
    randomNumber = Math.floor((Math.random() * 100) + 1);    
    }


var randomNumber = Math.floor((Math.random() * 100) + 1);

let guessCount = 0;
let guessMax = 10;

 
 
function guessGame(){ 
   let guessNum = document.getElementById('myNum').value;
   let answerOut = document.getElementById('outAnswer');
   document.getElementById('outAnswer').style.display = "block";

 
    if (guessNum == randomNumber) {
        answerOut.innerHTML = `Correct! </br> You win, number is ${guessNum}! </br> It's was ${guessCount + 1} try.`;
        document.getElementById('myNum').value = '';
    }
    else if (guessNum > randomNumber){
        answerOut.innerHTML = `You wrong! </br> Number is smaller. </br> It's try number ${guessCount + 1}`;
        guessCount++;
        console.log(guessCount);
        document.getElementById('myNum').value = '';
    }
    else {
        answerOut.innerHTML = `You wrong! </br> Number is bigger. </br> It's try number ${guessCount + 1}`;
        guessCount++;
        console.log(guessCount);
        document.getElementById('myNum').value = '';
    }
    if (guessCount == 10) {
        answerOut.innerHTML = 'Sorry! You lose';
        let tag = document.querySelector('dialog');
        setTimeout(function(){
            tag.close();
        }, 1000);
    }
}


function isNumber() {
    let answer = +myNum.value;
    if(Number.isNaN(answer)){
        document.getElementById('noNum').style.display = "inline";
        noNum.innerHTML = "*Please enter only numbers!"
    } else {
        document.getElementById('noNum').style.display = "none";
    }

}


