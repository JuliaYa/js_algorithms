function quickSort(array){
  if(array.length < 2) {
    return array;
  }

  if(array.length == 2){
    var first = array[0];
    var second = array[1];
    if(first > second){
      array[0] = second;
      array[1] = first;
      return array;
    }else{
      return array;
    }
  }

  var base = array[0];
  var left = [];
  var right = [];
  for (var i = 1; i < array.length; i++){
    if(base > array[i]){
      left.push(array[i]);
    }else{
      right.push(array[i]);
    }
  }
  return quickSort(left).concat([base], quickSort(right));
}

console.log(quickSort([]));
console.log(quickSort([3]));
console.log('[3,2] -> ' + quickSort([3,2]));
console.log('[3,1,7] -> ' + quickSort([3,1,7]));
console.log('[3,8,1,4,7] -> ' + quickSort([3,8,1,4,7]));