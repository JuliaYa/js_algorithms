/*Напишите функцию range, принимающую два аргумента – начало и конец диапазона – 
и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.
В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный
третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице.
Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. 

Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) 
возвращает [5, 4, 3, 2].
*/

function range(start, stop, inc){
  var array = [];
  if(!inc || inc == 0) {
    if(start < stop){
      inc = 1;
    }else{
      inc = -1;
    }
  }
  if(inc > 0){
    for(var i = start; i <= stop; i += inc){
      array.push(i);
    }
  }else{
    for(var i = start; i >= stop; i += inc){
      array.push(i);
    }
  }
  return array;
}

function sum(array){
  var result = 0;
  array.forEach(function(num) {
    result += num;
  });
  return result;
}
/*-----test-----*/

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range(7, 2, -2));
console.log(range(5, 1));

console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2)));