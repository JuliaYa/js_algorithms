/* Используйте метод reduce в комбинации с concat для свёртки 
массива массивов в один массив, у которого есть все элементы входных массивов. */

function convolute(array){
  if(array.length == 0){
    return [];
  }
  return array.reduce(function(result, sub_array){
    result = result ? result : [];
    return result.concat(sub_array);
  });
}

/*-----test-----*/
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(convolute(arrays));

arrays = [];
console.log(convolute(arrays));