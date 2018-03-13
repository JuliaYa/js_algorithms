function checkCriterion(name){  // double `gg` in name for example
  return name.indexOf('gg') >= 0;
}

function search(graph, start){
  var queue = graph[start];
  var searched = [];
  while (queue.length !== 0){
    var name = queue.shift();
    if (searched.indexOf(name) < 0){
      if(!checkCriterion(name)){
        searched.push(name);
        queue = queue.concat(graph[name]);
      }else{
        return name;
      }
    }
  }
  return false;
}

// test

var graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['tom', 'jonny'];
graph['anuj'] = [];
graph['tom'] = [];
graph['jonny'] = [];

var nn_name = search(graph, 'you');
console.log(nn_name);