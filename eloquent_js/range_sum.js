function range(start, stop, inc){
  var array = [];
  if(!inc || inc == 0) {
    inc = 1;
  }
  for(var i = start; i <= stop; i += inc){
    array.push(i);
  }
  return array;
}

function sum(array){
  var result = 0;
  for(var i = 0; i < array.length; i++){
    result += array[i];
  }
  return result;
}
/*-----test-----*/

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2)));