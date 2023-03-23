"use strict"



// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив



// const americans = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// const americans2 = americans.slice(2, 5);
// console.log(americans2)


//------------------------------------------------------------------------------------------------------------------------




// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Переставить "Janett", "Franz" в начало массива



// const americans = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];



//americans.reverse();
// console.log(americans);


//------------------------------------------------------------------------------------------------------------------------




// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Заменить "Eddie", "Janett" на "Oleg","Valerchik"



// const americans = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// americans.splice(4, 2, "Oleg", "Valerchik")
// console.log(americans)



//-------------------------------------------------------------------------------------------------------------------------



// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")



// const americans = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// americans.reverse()
// americans.splice(0, 4, "Mitrofan", "Mitrofan", "Mitrofan", "Mitrofan");
// console.log(americans)




//--------------------------------------------------------------------------------------------------------------------------




// Даны два массива ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"] ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"] Взять из второго массива все имена начина с "Aristarkh" (включительно) и добавить их в 1ый массив (не должно получится двумерного массива)



// let americans = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let russian = ["Nikodim", "Evlampij", "Aristarkh", "Drogolub", "Vitalij"];
// americans = americans.concat(russian.splice(2))
// console.log(americans);




//--------------------------------------------------------------------------------------------------------------------------




// Дана строка 'Мама мыла раму' С помощью prompt() получите строку. Поменяйте в строке 'Мама мыла раму' слово раму на полученное слово Например:

// prompt() ===>>> 'машину'
// // ‘Мама мыла машину’
// prompt() ===>>> 'рябину'
// // ‘Мама мыла рябину’
// prompt() ===>>> 'картину'
// // ‘Мама мыла картину’
// Вы можете использовать методы split, join, pop, push, slice и любые другие


// const original = "Мама мыла раму";
// const replacement = prompt("Что мыла мама?")
// const newSentence = original.replace("раму" , replacement);
// console.log(newSentence)
