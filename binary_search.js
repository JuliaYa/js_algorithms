// binary search for sorted list

function search( list, element ){
  var low = 0;
  var high = list.length - 1;

  while (low <= high){
    let mid = (low + high) / 2;
    let guess = list[mid];

    if(guess == element){
      return mid;
    }
    if(guess > element){
      high = mid - 1;
    }else{
      low = mid + 1;
    }
  }
  return null;
}

const list = [1,3,5,7,9,12,15];
console.log(search(list, 7));
console.log (search(list, 1));
console.log(search(list, 24));
