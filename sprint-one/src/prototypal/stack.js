 var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  someInstance.storage = {};

  return someInstance;

};
var stackMethods = {
  push: function(value){
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function(){
    this.counter && this.counter--;
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    return result;
  },

  size: function(){
    return this.counter;
  }
};


