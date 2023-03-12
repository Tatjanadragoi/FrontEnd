"use strict";



//Пользователь вводит ТРИ числа вывести в консоль наибольшее из них. В этой задаче необходимо сделать
// проверку на число (нужно убедиться, что пользователь ввел именно число)


/* const firstNumber = Number(prompt ("Введите первое число"))
const secondNumber = Number(prompt ("Введите второе число"))
const thirdNumber = Number(prompt ("Введите третье число"))

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log("первое число больше")
 }

 else if (secondNumber > firstNumber && secondNumber >  thirdNumber) {
    console.log("Второе число больше")
 }


else if ( thirdNumber > firstNumber && thirdNumber > secondNumber) {
     console.log("третье число больше")
}
 */




//------------------------------------------------------------------------------------------------------------------------



// Используя конструкцию switch, напишите программу, которая переводит числа в слова. Например: 
// пользователь вводит число 2, программа выводит «Два». Программу необходимо сделать для цифр от 0 до 5 (включительно)

/* const userNumber = Number(prompt("Введите число от 0 до 5"));
switch (userNumber) {
   case 0: console.log ("Ноль");
   break;
   case 1: console.log ("Один");
   break;
   case 2: console.log("Два");
   break;
   case 3: console.log ("Три");
   break;
   case 4: console.log ("Четыре");
   break;
   case 5: console.log ("Пять")
   break;
} */


//-----------------------------------------------------------------------------------------------------------------------


//Дан следующий код:

//let age = 10;

//if (age < 10) {
   // console.log('hi!');
//} else if (age < 20) {
    //console.log('hello!');
//} else {
    //console.log('good day!');
//}
//Необходимо переписать этот код используя тернарный оператор


//let age = 25;
//console.log (age < 10 ? "hi": age < 20 ? "hello" : "good day")




//--------------------------------------------------------------------------------------------------------------------

/* Написать программу для проверки таблицы умножения:
Пользователь вводит число a
Пользователь вводит число b
Пользователь вводит ответ на a * b
Нам необходимо проверить ответ пользователя на корректность, если пользователь ответил неправильно то выводим ответ вида:
Ошибка! Правильный ответ: correctAnswer

Где correctAnswer - это переменная, в которой находится правильный ответ

Если пользователь ввел правильный ответ, то выводим сообщение вида: Правильно! */


const firstNumber = prompt("Введите первое число");
const secondNumber = prompt ("Введите второе число");
const result = prompt ("Введите результат");
const correctAnswer = firstNumber* secondNumber;

if (Number(result) === Number(correctAnswer)) {
   console.log ("Правильно")
}

else {
   console.log ("Ошибка! Правильный ответ: " + correctAnswer)
}



