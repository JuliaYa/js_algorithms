/* У массивов есть метод reverse, меняющий порядок элементов в массиве на обратный.
В качестве упражнения напишите две функции, reverseArray и reverseArrayInPlace.
Первая получает массив как аргумент и выдаёт новый массив – с обратным порядком
элементов. Вторая работает как оригинальный метод reverse – она меняет порядок
элементов на обратный в том массиве, который был ей передан в качестве аргумента.
Не используйте стандартный метод reverse. */

function reverseArray(array){
  var newArray = [];
  for(var i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array){
  var length = array.length;
  var odd = length % 2 != 0;
  var lastIndex = length - 1;
  var center = odd ? lastIndex / 2 : (length / 2) - 1;  // add comments for logic

  for(var i = 0; i <= center; i++){
    if(i == center && odd){
      break;
    }
    var storage = array[i];
    array[i] = array[lastIndex - i];
    array[lastIndex - i] = storage;
  }
  return array;
}

/*-----test-----*/

console.log(reverseArray([1, 2, 3]));

console.log(reverseArrayInPlace([1, 2, 3]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));
console.log(reverseArrayInPlace([2]));