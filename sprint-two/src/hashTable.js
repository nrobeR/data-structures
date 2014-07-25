var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage.get(i))
  {
    this._storage.get(i).addToTail(v,k);
  }else
  {
    var tempLink = makeLinkedList();
    tempLink.addToTail(v,k);
    this._storage.set(i,tempLink);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = null;

  if(this._storage.get(i).head){
    var currentnode = this._storage.get(i).head;
     while(currentnode)
    {
      if(currentnode.key === k)
      {
       result = currentnode.value;
      }
      currentnode = currentnode.next;
    }
  }



  return result;
};

HashTable.prototype.remove = function(k){
var i = getIndexBelowMaxForKey(k, this._limit);
var currentnode = this._storage.get(i).head;
var prevnode = currentnode;
if(currentnode.key === k){
  this._storage.get(i).head = null;
  this._storage.get(i).tail = null;
}else{
  currentnode = currentnode.next;
  while(currentnode){
    // console.log(currentnode.value + " k: " + k);
    if(currentnode.key === k){
      var temp = currentnode.next;
      // delete currentnode;
      //currentnode.next = null;
      prenode.next = temp;

      if(prevnode)
      {
       prevnode.next = temp;
      }
    }
    prevnode = currentnode;
    currentnode = currentnode.next;
  }
}

};


var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value, ke){
    var node = makeNode(value, ke);
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

var makeNode = function(value, key){
  var node = {};
  node.key = key;
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




/*
 * Complexity: What is the time complexity of the above functions?
 */
