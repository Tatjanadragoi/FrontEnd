"use strict";

const car = {
  model: "tesla",
  adress: {
    country: {
      city: {
        name: "Boston",
        street: {
          name: "pushkina",
          number: 2,
        },
      },
    },
    region: ["Iowa", "Texas", "California"],
  },
  specs: {
    price: {
      low: 2000,
      mid: 3000,
      high: 5000,
    },
    engine: {
      power: 400,
      lowPower: 100,
    },
  },
};

//С помощью деструктуризации запишите в отдельны переменные:

/* ----------------- 1.1 Название города в котором находится авто


const {adress: {country: {city: {name: cityName}}}} = car;
console.log (cityName);

--------------------1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona')

  const {adress:{arr= [... car.adress.region, "Arizona"]}} = car;
   console.log(arr);



--------------------1.3 Поле high, объекта price----------------



const {specs: {price:{high: highP}}} = car;
console.log(highP)



----------1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида: { city: 12, mix: 10, country: 8 }


const {specs: {fuelComsumption= { city: 12, mix: 10, country: 8}}} = car
console.log(fuelComsumption); */

//-------------------------------------------------------------------------------------------------------------------

// **************Дан объект:

const student = {
  math: 5,
  biology: 3,
  language: 2,
  isOboltus: true,
};

// 1) Напишите программу, которая умножит все ЧИСЛОВЫЕ (и только числовые) значения на 2 и перезапишет каждое свойство объекта (числового типа).

// for (let key in student)  {
//     if (student[key] !== true) {
//     student[key] = student[key] * 2;
//     }}
// console.log(student);

//----------------------------------------------------------------------------------------------------------------------

// 2) Напишите программу, которая посчитает среднее арифметическое всех оценок студента. Если средняя оценка (после умножения) будет больше 5, то поле isOboltus должно стать false.

// let sum = 0;
// let counter = 0;
// let result = 0;
// for (let key in student) {
//   if (typeof student[key] === "number") {
//     sum += student[key];
//     counter++;
//     result = sum / counter;
//   }
// }
// console.log(result);
// if (result > 5) {
//   student.isOboltus = false;
// }
// console.log(student);
