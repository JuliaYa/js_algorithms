function sum (array){
  return  array.length == 0 ? 0 : array[0] + sum(array.slice(1));
}

const list = [1,3,5,7,9,12,15];
console.log(sum(list));