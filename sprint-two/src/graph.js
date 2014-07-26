var Graph = function(){
  this.allNodes = {
  };
  this.count = 0;
  this.firstNode = undefined;
};

Graph.prototype.addNode = function(newNode, toNode){
  if(!this.allNodes[newNode]){


var tempNode = createNode(newNode);

this.allNodes[newNode] = tempNode;


 if(toNode){
  // console.log("triggered");
    this.addEdge(newNode,toNode);
  }







if(this.count === 1)
{
  for(var key in this.allNodes)
  {
   //console.log("triggered");
this.addEdge(newNode , key);
//console.log(this.allNodes[newNode]);
  }
}

this.count++;
}};

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
  // console.log("Get EDGE BEGIN: fromNode: " +fromNode + " toNode: " + toNode);
    // console.log(this.allNodes[fromNode]);
      if(this.allNodes[fromNode].edges[toNode]){
    //    console.log("getEdgeTriggered");
            result = true;}
}
return result;

};

Graph.prototype.addEdge = function(fromNode, toNode){

  if(this.allNodes[fromNode] && this.allNodes[toNode])
{
this.allNodes[fromNode].edges[toNode] = toNode;
this.allNodes[toNode].edges[fromNode] = fromNode;
//console.log(fromNode.edges[toNode]);
}
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.allNodes[fromNode]&&this.allNodes[toNode]){
    delete this.allNodes[fromNode].edges[toNode];
    delete this.allNodes[toNode].edges[fromNode];
  }
  console.log(this.allNodes[fromNode].edges);
  if(isEmpty(this.allNodes[fromNode].edges)){
    delete this.allNodes[fromNode];
    console.log(this.allNodes[fromNode]);
  }
  if(isEmpty(this.allNodes[toNode].edges)){
    delete this.allNodes[toNode];
  }
};

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}


var createNode = function(value){
  var node = {};

  node.value = value;
  node.edges = {};

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
