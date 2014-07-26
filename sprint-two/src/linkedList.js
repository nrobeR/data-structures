var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value,key){
    var node = makeNode(value,key);
    if(!list.head && !list.tail){
      list.head = node;
      list.tail = node;
    }else{
      list.tail.next = node;
      list.tail = node;
    }

  };

  list.removeHead = function(){
    var temp = list.head;
    if(list.head.next){
      list.head = list.head.next;
    }else{
      list.head = null;
      list.tail = null;
    }
    return temp.value;
  };

  list.contains = function(target){
    var result = false;
    var currentnode = list.head;
    while(currentnode){
      if(currentnode.value === target){
        result = true;
      }
      currentnode = currentnode.next;
    }
    return result;
  };

  return list;
};

var makeNode = function(value,key){
  var node = {};

  node.key = key;
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
