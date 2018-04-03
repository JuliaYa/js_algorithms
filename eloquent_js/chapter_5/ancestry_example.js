var ancestry = JSON.parse(require("./ancestry.js"));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

/*Используя набор данных из примера, подсчитайте среднюю разницу в возрасте между
 матерями и их детьми (это возраст матери во время появления ребёнка).
Можно использовать функцию average, приведённую в главе.

Обратите внимание – не все матери, упомянутые в наборе, присутствуют в нём.
Здесь может пригодиться объект byName, который упрощает процедуру поиска
 объекта человека по имени.*/

/*
{"name": "Carolus Haverbeke",
 "sex": "m",
 "born": 1832,
 "died": 1905,
 "father": "Carel Haverbeke",
 "mother": "Maria van Brussel"}
*/
var mothers_ages = [];

ancestry.forEach(function(person){
  var mother = byName[person.mother];
  if(mother){
    mothers_ages.push(person.born - mother.born);
  }
});

var average_age = average(mothers_ages);

console.log(average_age);


/*----average age by centuries----*/
/*Подсчитайте средний возраст людей для каждого из столетий.
 Назначаем столетию людей, беря их год смерти, деля его на 100 и округляя: 
 Math.ceil(person.died / 100) 
 
// → 16: 43.5
//   17: 51.2
 */
/*В качестве призовой игры напишите функцию groupBy, абстрагирующую операцию
 группировки. Она должна принимать массив и функцию, которая вычисляет группу
 для элементов массива, и возвращать объект, который сопоставляет названия
 групп массивам членов этих групп.*/

 var centuries = {};

 ancestry.forEach(function(person){
   var century = Math.ceil(person.died / 100);
   var age = person.died - person.born;
   if(century in centuries){
     centuries[century].push(age);
   }else{
     centuries[century] = [age];
   }
 });

 console.log(centuries);

 for(century in centuries){
   var av_age = average(centuries[century]);
   av_age = Math.round(av_age * 10) / 10;
   console.log(`${century}: ${av_age}`);
 }