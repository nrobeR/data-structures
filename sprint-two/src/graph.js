var Graph = function(){
  this.allNodes = {
  };
  this.count = 0;
  this.firstNode = undefined;
};

Graph.prototype.addNode = function(newNode, toNode){
  if(!this.allNodes[newNode]){
    var tempNode = createNode(newNode);
    if(this.firstNode === undefined){
      this.firstNode = tempNode;
    }
    this.allNodes[newNode] = tempNode;

    if(this.count === 1)
    {
      this.addEdge(newNode,this.firstNode.value);
    }

    if(toNode){
      this.addEdge(newNode,toNode);
    }

    this.count++;
  }
};

Graph.prototype.contains = function(node){
  if(this.allNodes[node])
  {
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  if(this.allNodes[node])
  {
    this.count--;
    delete this.allNodes[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){

  var result = false;
  if(this.allNodes[fromNode] && this.allNodes[toNode])
  {
    if(this.allNodes[fromNode].edges[toNode]){
      result = true;
    }
  }
  return result;

};

Graph.prototype.addEdge = function(fromNode, toNode){

  if(this.allNodes[fromNode] && this.allNodes[toNode])
  {
    this.allNodes[fromNode].edges[toNode] = toNode;
    this.allNodes[toNode].edges[fromNode] = fromNode;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.allNodes[fromNode]&&this.allNodes[toNode]){

    delete this.allNodes[fromNode].edges[toNode];
    console.log("before: " + this.allNodes[toNode].edges[fromNode]);
    delete this.allNodes[toNode].edges[fromNode];
    for(var key in this.allNodes[toNode].edges){
      console.log(toNode);
      console.log(key);
    }
  }
  if(isEmpty(this.allNodes[fromNode].edges)){
    this.removeNode(fromNode);
  }

  if(isEmpty(this.allNodes[toNode].edges)){
    this.removeNode(toNode);
  }
};

var isEmpty = function(obj){
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      return false;
    }
  }
  return true;
};


var createNode = function(value){
  var node = {};

  node.value = value;
  node.edges = {};

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
