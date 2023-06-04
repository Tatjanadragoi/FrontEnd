"use strict"


// Cделать три кнопки click me, при загрузке страницы каждой кнопке должна назначаться "бомба" (при клике на кнопку она меняет свою надпись на BOOM!). В любой момент времени может быть только одна кнопка с бомбой. При повторном клике на кнопку она не должна менять свою надпись. При каждой перезагрузке страницы кнопка с бомбой должна переназначаться.


// const btn = document.getElementsByClassName('btn');

// const allButtons = [... btn]

// console.log(allButtons)

// allButtons.forEach((elem, index, arr) => {

//   elem.addEventListener('click', () => {
//     elem.innerText = Math.random() > 0.5 ? 'BOMB!' : 'OK!';
//   })
    
// })



//------------------------------------------------------------------------------------------------------------------


// Напишите игру "камень, ножницы, бумага". Должно быть три кнопки для выбора игрока ("камень", "ножницы", "бумага"). При клике игрока на любую из кнопок, под кнопками выводится сообщение "компьютер выбрал: ${computerChoise}", где computerChoise - это рандомный выбор компьютера (выбор рандомим с помощью Math.round(Math.random() * 2)). В этой игре также необходимо выводить результат текущего раунда (кто выиграл).


const btn1 = document.getElementsByClassName("btn1");
let text = document.getElementById("text")
let whoWin = document.getElementById("win")
const buttons = [...btn1]
let computerChoise = 0;


buttons.forEach((element) => {
  element.addEventListener('click', () => {
    let randomNumber = Math.random() * 3;
    if (randomNumber < 1) {
      computerChoise = "камень"
    }
    else if ( randomNumber >=1 && randomNumber < 2 ) {
      computerChoise = "ножницы"
    }
    else {
      computerChoise = "бумага"
    }
if(computerChoise === element.innerText) {
  whoWin.innerText = "Ничья"
}
else if (computerChoise === "камень" && element.innerText === "ножницы" ) {
  whoWin.innerText = "Компьютер выиграл"
}
else if (computerChoise === "ножницы" && element.innerText === "камень") {
  whoWin.innerText = "Вы выиграли"
}
else if (computerChoise === "бумага" && element.innerText === "камень") {
  whoWin.innerText = "Компьютер выиграл"
}
else if (computerChoise === "камень" && element.innerText === "бумага") {
  whoWin.innerText = "Вы выиграли"
}
else if (computerChoise === "ножницы" && element.innerText === "бумага") {
  whoWin.innerText = "Компьютер выиграл"
}
else if (computerChoise === "бумага" && element.innerText === "ножницы") {
  whoWin.innerText = "Вы выиграли"
}

   text.innerText = `Компьютер выбрал ${computerChoise} а вы ${element.innerText}`
  
  })
})
