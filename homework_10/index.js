"use strict"


// 1) Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]), и методом .code() (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»). Метод code должен храниться в прототипе класса. Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

// class Programmer {
//     constructor(name, stack = []) {
//         this.name = name;
//         this.stack = stack
//     }

//     code () {
//         for(let i= 0; i < this.stack.length; i++)
//         console.log(`${this.name} is coding on ${this.stack[i]}`);
//     }
// }

    
// const p = new Programmer ("Oleg", ["python", "php", "java"])
// console.log(p)
// p.code("Oleg", ["python"])


//------------------------------------------------------------------------------------------------------


// 2) Создать массив из 10 случайных инстансов Programmer, и отфильтровать их с помощью функции getSeniorDeveloper так, чтобы в результирующий массив попали только те Programmer, у которы длина массива stack больше 4.


// const programmerArr = [
// new Programmer("Sergej", ["php", "Js", "C++", "C", "Swift", "java"]),
// new Programmer("Ivan", ["python", "php", "java"]),
// new Programmer("Nikolai", ["python", "php", "java"]),
// new Programmer("Aleksey", ["python", "php", "java"]),
// new Programmer("Dmitriy", ["python", "php", "C", "java"]),
// new Programmer("Vladimir", ["python", "php", "java"]),
// new Programmer("Vitalij", ["python", "C", "Swift", "php", "java"]),
// new Programmer("Igorj", ["python", "Js", "C++", "php", "java"]),
// new Programmer("Ruslan", ["python", "php", "Js", "C++", "java"]),
// new Programmer("Mihail", ["python", "php", "java"])
// ]




// const coolDeveloper = []
// function getSeniorDeveloper () {

// for(let i = 0; i< programmerArr.length; i++) {
//     if(programmerArr[i].stack.length > 4) {
//     coolDeveloper.push(programmerArr[i])
// }
//   }

// console.log(coolDeveloper)

// }

// getSeniorDeveloper()



//-------------------------------------------------------------------------------------------------------------


// 4) Создать конструктор Car, который принимает параметры model, color, price. Конструктор должен возвращать объект в котором присутствуют вышеназванные поля со значениями. Каждый представитель класса Car должен обладать методом run() который выводит сообщение вида : MODEL + “ ” + COLOR + ” is running”.

// class Car {
//     constructor (model, color, price) {
//         this.model = model;
//         this.color = color;
//         this.price = price;
//     }
//     run() {
//         console.log(`${this.model} in ${this.color} color is running `)
//     }
// }

// const tryCar = new Car ("Tesla", "white", "100000 Eur")


// console.log(tryCar)
// tryCar.run()


//--------------------------------------------------------------------------------------------------------------------------



// 5) Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов). Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount. Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с наибольшим количеством страниц


// class Book {
//     constructor (author, bookName, pageAmount) {
//         this.author = author;
//         this.bookName = bookName;
//         this.pageAmount = pageAmount
//     }
// }




// const book = [
//     new Book("Михаил Булгаков", "Мастер и Маргарита", 159),
//     new Book("Михаил Булгаков", "Собачье сердце", 320),
//     new Book("Александр Дюма", " Граф Монте-Кристо", 180),
//     new Book("Александр Пушкин", "Евгений Онегин", 204),
//     new Book("Федор Достоевский", " Преступление и наказание", 221),
//     new Book("Лев Толстой", "Война и мир", 450),
//     new Book("Александр Пушкин", "Повести Белкина", 170),
//     new Book("Александр Дюма", "Три мушкетера", 213)
// ]


// function getBiggerBook () {
//     const pagesFromAllBooks = []
//     for (let i = 0; i < book.length; i++) {
    
//         pagesFromAllBooks.push(book[i].pageAmount)
    
//     }
 
//     let maxIndex = pagesFromAllBooks.reduce((acc, item, index) => pagesFromAllBooks[acc] > item ? acc : index, 0);

   

//     console.log(book[maxIndex])

//    } 
          
//     getBiggerBook()




//----------------------------------------------------------------------------------------------------------------------------

// 6) Создать класс Timer, инстанс которого запускает таймер и выводит в консоль прошедшее время в секундах (1 2 3 4 5 и тд) инстанс должен обладать методами .start() .stop() которые запускают и останавливают таймер а также методом .reset() который сбрасывает таймер на 0. С помощью Timer вы должны создать несколько таймеров и убедится в том, что они работают независимо друг от друга. останавливайте таймер через некоторое время после запуска с помощью setTimeout()


// class Timer {
//         constructor () {
//             this.intervalId = null;
//             this.time = 0;
//         }
    
//         start () {
//             this.intervalId = setInterval(() => {
//                 console.log(++this.time);
//             }, 2000);
//         }
    
//         stop () {
//             clearInterval(this.intervalId);
//         }
    
//         reset () {
//             this.time = 0;
//         }
//     }
    
//     const timer = new Timer();
    
//     console.log(timer);
    
//     timer.start();
    
//     setTimeout(() => {
//         timer.reset();
//     }, 5000);
    
//     setTimeout(() => {
//         timer.stop();
//     }, 7000);

















