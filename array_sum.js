function sum (array){
  return  array.length == 0 ? 0 : array[0] + sum(array.slice(1));
}

function max(array){
  if(array.length == 1) return array[0];
  const max_tail = max(array.slice(1));
  return array[0] >= max_tail ? array[0] : max_tail; 
}

const list = [1,3,5,7,9,12,15];
const list2 = [4,7,1,23,24,5];
console.log(sum(list));
console.log(max(list));
console.log(max(list2));
