var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var head = 0;
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function(){
    if(tail>head){
      var result = storage[head];
      delete storage[head];
      head++;
    }
    return result;
  };

  someInstance.size = function(){
    return tail-head;
  };

  return someInstance;
};
