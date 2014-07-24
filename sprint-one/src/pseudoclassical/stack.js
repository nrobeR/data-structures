var Stack = function(){

this.counter = 0;
this.storage = {}



};
Stack.prototype.push = function(value){
    this.storage[this.counter] = value;
    this.counter++;
  };

Stack.prototype.pop = function(){
    this.counter && this.counter--;
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    return result;
  };

Stack.prototype.size =  function(){
    return this.counter;
  };


 var makeStack = new Stack();




