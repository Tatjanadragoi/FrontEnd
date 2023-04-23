"use strict"






// ......................Closures.................


// 1) Создать функцию «переключатель» toggleMe(), которая при вызове чередует возвращаемые булевы значения (true, false).

// toggleMe() // true
// toggleMe() // false
// toggleMe() // true
// toggleMe() // false


// function toggleMe() {
// const bool = () =>  Math.random() >= 0.5;
// console.log(bool())

//     }

// toggleMe()



// 2) Создать функцию counter(), которая способна считать количество своих вызовов (возвращает число). Если передать в эту функцию число как аргумент, то она должна возвращать счетчик начиная с этого числа.

// Пример:

// counter() // 1
// counter() // 2
// counter(6) // 7
// counter() // 8
// counter(11) // 12
// counter() // 13
// counter() // 14



// function counterMaker () {
// let count = 0;
// let number = 0;
// return (number) => {

//    if (!number) {
//      return count++
//    }
//    else return number ++
// }
// }


// const result = counterMaker ();
// console.log(result(5))
// console.log(result())
// console.log(result())
// console.log(result())
// console.log(result())
// console.log(result(8))
// console.log(result())






// 3) Создать функцию classNameEditor(), задача которой "управлять" css-классами. Функция должна принимать строку с названием css-класса и булево значние. Если булево значение true, то функция должна добавлять переданный css-класс, если false, то найти и удалить значение из css-класса. Функция всегда должна возвращать текущее значение css-класса.

// Пример:

// classNameEditor() // '' - вернется пустая строка
// classNameEditor('test', true) // 'test' - добавили класс 'test'
// classNameEditor('test', true) // 'test' - попытались добавить класс 'test' еще раз (не должно быть дублирующих классов)
// classNameEditor('smth', true) // 'test smth' - добавили класс 'smth'
// classNameEditor('test', false) // 'smth' - удалили класс 'test'
// classNameEditor('test', false) // 'smth' - удалили класс 'test' еще раз (это невозможно тк класс уже удален)






// function getClassName () {
// let cssName = ''

// return (className, ifShouldAddName) => {
//     if(!className && !ifShouldAddName) {
//         return cssName.trim();
//     }

//     if(ifShouldAddName) {
//         if(!cssName.includes(className)) {
//             cssName += `${className}`
//             return cssName.trim()
//         }
//         else{
//             return cssName.trim()
//         }

//     }
//     else {
// cssName = cssName.replace(className, " ")
// return cssName.trim()
//     }
// }


// }


// const classNameEditor = getClassName ();

// console.log(classNameEditor())
// console.log(classNameEditor("test", true))
// console.log(classNameEditor("test", true))
// console.log(classNameEditor(" smt", true))
// console.log(classNameEditor("test", false))
// console.log(classNameEditor("test", false))



//--------------------------------------------------------------------------------------------------------------------


//....................Callbacks...........



// 1) Создать функцию checkLogin, которая принимает 4 параметра. 1 параметр - это логин, введенный пользователем, 2 – правильный логин, 3 – callback, который вызовется если логин верный, 4 – callback, который вызовется если логин ложный.

// Пример вызова:

// checkLogin('user-admin', 'admin', itsOk, itsNotOk);




// function okay() {
//     console.log("its okay")
// }

// function notOkay() {
//     console.log("its not okay")
// }

// function checkLogin (okay, notOkay) {
//     const userAdmin = prompt("Enter your login")
//     const admin = "login"
    

//     if(userAdmin === admin) {
//         okay()
//     }
//     else { 
//         notOkay()
//     }
// }

// checkLogin(okay,notOkay)



//----------------------------------------------------------------------------------------------------




// 2) Написать функцию которая принимает массив строк (имена) и два колбэка. функция добавляет к каждому элементу массива фамилию "Smith" после чего передает получившийся массив в первый колбэк. Когда первый колбэк отработает, возвращеное им значение нужно передать во второй колбэк.
// 1ый колбэк: это функция которая принимает массив строк, добавляет к каждой строке "Mr. " и возвращает получившийся массив. 
//2ой колбэк: функция которая принимает массив строк и выводит через alert() каждый элемент массива.

// const originNames = ["Vitalik" , "Seroga", "Stasik"]


// const mister = []
// const lastName = []



// const smith = originNames.forEach((originNames, mister, vivodAlert) => {
//     lastName.push(originNames + " Smith")


// })


// const mr =  lastName.forEach((item) => {
//     mister.push(" Mr. " + item)
    
// return mister;
// })

// function vivodAlert () {
//     alert(mister)
// }

// console.log(mister)
// vivodAlert()




//------------------------------------------------------------------------------------------------------------




//...................Arrays..............

// 1) Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.

// const arr = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3]


// const newArr = arr.filter((item, index, ar) => {
    
// if(arr.indexOf(item) !== index) {
//     return item
// }
// })



// console.log(newArr)
  








// myFuncName([1,1,1,4,4,5,1,6,6,74,74,74,3]) //  [1,4,6,74]






//-----------------------------------------------------------------------------------------------------------------


// 2) Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив reduce() и вернуть тот массив сумма элементов которого наибольшая.

// const arr = [
// [2,4,6],
// [1,2,3,4],
// [10,20,30,40],
// [11,12,13,14],
// [5,6,7,8],
// [50,60,70,80],
// [11,12,13,14],
// [3,5,7,9],
// ]

// const sumOfArr = (sum, item) => sum + item;
// const result = arr.map((arr) => {
//     return arr.reduce(sumOfArr)
// }
 
// )
// console.log(result)



//----------------------------------------------------------------------------------------------------------------------

// 3) Дан случайный массив чисел. С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.

// const arr = [2,8,12,15,19,21,24,27,30]
// const newArr = arr.filter((number) => {
//     if ( number % 2 === 0 && number > 10) {
//         return true
//     }
//     else {
//         return false 
//     }
// }

// )
// console.log (newArr)

//-------------------------------------------------------------------------------------------------------------------------

// 4) Дан массив объектов:

// const fbTeam = [
//      {
//      playerName:"Messi",
//      team:"Barcelona"
//      },
//      {
//      playerName:"Suarez",
//      team:"Barcelona"
//      },
//      {
//      playerName:"Ronaldo",
//      team:"Juventus"
//      },
//      {
//      playerName:"Buffon",
//      team:"Juventus"
//      },
//      {
//      playerName: 'Valerchik',
//      team: 'Vedrich97'
//      },
//      {
//      playerName:"Gonsalo",
//      team:"Juventus"
//      },
//      {
//      playerName:"Pedro",
//      team:"Chelsea"
//      },
//     {
//      playerName:"Zuma",
//      team:"Chelsea"
//      },
//      {
//      playerName:"PSG",
//      team:"Rico"
//      }
//  ];

// const newArr = []
//  const fbPlayersByTeams = fbTeam.reduce((acc, item) => {
// if (!acc[item.team]) { acc[item.team] = []
   
// }
// acc[item.team].push(item);
// return acc;

//  },{})

// console.log(fbPlayersByTeams)

// // С помощью метода reduce() преобразуйте его в объект вида:

// const fbPlayersByTeams = {
//     Juventus: [{}, {}, {}],
//     PSG: [{}],
//     Chelsea: [{}, {}],
//     Vedrich97: [{}],
//     Barcelona: [{}, {}]
//  }
// Игроки должны быть сгруппированы по командам в соответствующие поля объекта fbPlayersByTeams. Под {} в примере имеется ввиду полный объект игрока (такая запись сделана для упрощенного понимания примера
















