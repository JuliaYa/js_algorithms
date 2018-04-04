/*Напишите функции every и some, которые работают так же, как встроенные методы массива,
  только принимают массив в качестве аргумента.*/

  function some(array, func){
    var answer = false;
    array.forEach(function(elem){
      if(func(elem)){
        answer = true;
      }
    });
    return answer;
  }
  
  function every(array, func){
    var answer = true;
    array.forEach(function(elem){
      if(!func(elem)){
        answer = false;
      }
    });
    return answer;
  }
  
  console.log(some([NaN, 3, 4], isNaN));
  
  console.log(every([NaN, NaN, 4], isNaN));
  console.log(every([NaN, NaN, NaN], isNaN));