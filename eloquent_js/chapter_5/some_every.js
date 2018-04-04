/*Напишите функции every и some, которые работают так же, как встроенные методы массива,
  только принимают массив в качестве аргумента.*/

  function some(array, func){
    var answer = false;
    for(var i = 0; i < array.length; i++){
      if(func(array[i])){
        answer = true;
        break;
      }
    }
    return answer;
  }
  
  function every(array, func){
    var answer = true;
    for(var i = 0; i < array.length; i++){
      if(!func(array[i])){
        answer = false;
        break; 
      }
    };
    return answer;
  }
  
/*------test------*/

  console.log(some([NaN, 3, 4], isNaN));
  console.log(some([2, 3, 4], isNaN));
  
  console.log(every([NaN, NaN, 4], isNaN));
  console.log(every([NaN, NaN, NaN], isNaN));