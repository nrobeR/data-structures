var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;
  newTree.insert = binarySearchTreeMethods.insert;
  newTree.contains = binarySearchTreeMethods.contains;
  newTree.depthFirstLog = binarySearchTreeMethods.depthFirstLog;
  return newTree;
};




var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value){
  if(value < this.value){
    if(!this.left){
      this.left = makeBinarySearchTree(value);
    }else{
      this.left.insert(value);
    }
  }else if(value > this.value){
    if(!this.right){
      this.right = makeBinarySearchTree(value);
    }else{
      this.right.insert(value);
    }
  }
};

binarySearchTreeMethods.contains = function(target){
  var flag = false;
  if(this.value === target)
  {
    flag = true;
    return true;
  }

  if(this.left){
    flag = flag ||this.left.contains(target);
  }

  if(this.right){
    flag = flag || this.right.contains(target);
  }
  return flag;

};

binarySearchTreeMethods.depthFirstLog = function(callback){
  callback(this.value);
  if(this.left){
    this.left.depthFirstLog(callback);
  }

  if(this.right){
    this.right.depthFirstLog(callback);
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */

