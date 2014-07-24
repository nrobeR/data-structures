var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {}; //'undefined' originally dont forget bro.
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){

this._storage[item] = item;


};

setPrototype.contains = function(item){
if(this._storage[item] === item)
{
  return true;
}
else
{
  return false;
}
};

setPrototype.remove = function(item){
if(this._storage[item] = item)
{

  this._storage[item] = undefined;
}

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
