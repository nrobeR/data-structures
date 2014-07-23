 var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style
  var someInstance = {
    'counter': 0,
    'storage': {}
  };

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

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


