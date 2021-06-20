
var randomNumber = Math.floor((Math.random() * 100) + 1);
var guessCount = 0;
var guessMax = 10;

function openGame() {
    let tag = document.querySelector('dialog');
    dialogPolyfill.registerDialog(tag);
    tag.showModal();
}

function closeGame() {
    let tag = document.querySelector('dialog');
    tag.close();
    document.getElementById('outAnswer').style.display = "none";
    guessCount = 0;
    location.reload();    
}

function guessGame(){ 
    let guessNum = document.getElementById('myNum').value;
    let answerOut = document.getElementById('outAnswer');
    document.getElementById('outAnswer').style.display = "block";
   
    if (guessNum == randomNumber) {
        answerOut.innerHTML = `Correct! </br> You win, number is ${guessNum}! </br> It's was ${guessCount + 1} try.`;
        document.getElementById('myNum').value = '';
        document.getElementById('myNum').style.display = "none"
        document.getElementById('numButton').style.display = "none"

    } else if (guessNum < randomNumber){
        if(guessNum == "") {
            document.getElementById('numButton').style.display = "none";
            document.getElementById('myNum').value = '';
            noNum.style.display = "block";
            noNum.innerHTML = "Enter some number, please!";
            answerOut.style.display = "none";
            guessCount = guessCount;
        } else if (guessNum == 0) {
            document.getElementById('numButton').style.display = "none";
            document.getElementById('myNum').value = '';
            noNum.style.display = "block";
            noNum.innerHTML = "From 1!";
            answerOut.style.display = "none";
            guessCount = guessCount; 
        } else {
            answerOut.innerHTML = `You wrong! </br> Number is bigger. </br> It's try number ${guessCount + 1}`;
            guessCount++;
            console.log(guessCount);
            document.getElementById('myNum').value = '';
        }
    } else {
        answerOut.innerHTML = `You wrong! </br> Number is smaller. </br> It's try number ${guessCount + 1}`;
        guessCount++;
        console.log(guessCount);
        document.getElementById('myNum').value = '';
    }
    if (guessCount == 10) {
        answerOut.innerHTML = `Sorry! </br> You lose. </br> Right number: is ${randomNumber}`;
        document.getElementById('myNum').style.display = "none"
        document.getElementById('numButton').style.display = "none"
    }
}

function isNumber() {
    let answer = +myNum.value;
    if(Number.isNaN(answer)){
        document.getElementById('noNum').style.display = "inline";
        noNum.innerHTML = "*Please enter only numbers!"
        document.getElementById('numButton').style.display = "none";
    } else if(answer > 100) {
        document.getElementById('noNum').style.display = "inline";
        noNum.innerHTML = "*I said, number from 1 to 100!"
        document.getElementById('numButton').style.display = "none";
    } else {
        document.getElementById('noNum').style.display = "none";
        document.getElementById('numButton').style.display = "block";
    }

}
