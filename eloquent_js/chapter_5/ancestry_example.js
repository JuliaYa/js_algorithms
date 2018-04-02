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