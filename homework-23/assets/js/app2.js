
randomNumber = Math.floor((Math.random() * 100) + 1);
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
    let isSubmit = document.getElementById('submitForm').value;
    document.getElementById('outAnswer').style.display = "block";
   
    if (guessNum == randomNumber) {
            answerOut.innerHTML = `Верно! </br> Ты отгадал - мое число ${guessNum}! </br> Это была ${guessCount + 1}-я попытка.`;
            document.getElementById('myNum').value = '';
            document.getElementById('myNum').style.display = "none";
            document.getElementById('numButton').style.display = "none";
            document.getElementById('reloadButton').style.display = "block";
            answerOut.classList.remove("text-warning");
            answerOut.classList.remove("fs-4");
            answerOut.classList.add("text-success");
            answerOut.classList.add("fs-3");
    } else if (guessNum < randomNumber){
        if(guessNum == "" || isSubmit == "") {
            document.getElementById('numButton').style.display = "none";
            document.getElementById('myNum').value = '';
            noNum.style.display = "block";
            noNum.innerHTML = "*Нужно ввести номер!";
            answerOut.style.display = "none";
            guessCount = guessCount;
        } else if (guessNum == 0) {
            document.getElementById('numButton').style.display = "none";
            document.getElementById('myNum').value = '';
            noNum.style.display = "block";
            noNum.innerHTML = "*От 1!";
            answerOut.style.display = "none";
            guessCount = guessCount; 
        } else {
            answerOut.innerHTML = `Ты не угадал! </br> Мой номер больше. </br> Это попытка номер: ${guessCount + 1}`;
            answerOut.classList.add("text-warning");
            answerOut.classList.add("fs-5");
            guessCount++;
            console.log(guessCount);
            document.getElementById('myNum').value = '';
        }
    } else {
        answerOut.innerHTML = `Ты не угадал! </br> Мой номер меньше. </br> Это попытка номер: ${guessCount + 1}`;
        answerOut.classList.add("text-warning");
        answerOut.classList.add("fs-5");
        guessCount++;
        console.log(guessCount);
        document.getElementById('myNum').value = '';
    }
    if (guessCount == 10) {
        answerOut.innerHTML = `Прости! </br> Ты проиграл. </br> Правильный номер: ${randomNumber}`;
        answerOut.classList.add("text-danger");
        answerOut.classList.add("fs-3");
        document.getElementById('myNum').style.display = "none"
        document.getElementById('numButton').style.display = "none"
    }
}

function isNumber() {
    let answer = +myNum.value;
    if(Number.isNaN(answer)){
        document.getElementById('noNum').style.display = "inline";
        noNum.innerHTML = "*Подалуйста, вводи только цифры!"
        document.getElementById('numButton').style.display = "none";
    } else if(answer > 100) {
        document.getElementById('noNum').style.display = "inline";
        noNum.innerHTML = "*Я же написал - до 100!"
        document.getElementById('numButton').style.display = "none";
    } else {
        document.getElementById('noNum').style.display = "none";
        document.getElementById('numButton').style.display = "block";
    }

}

function newGame() {
    location.reload();
    
}