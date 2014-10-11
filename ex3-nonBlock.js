// Non blocking example
http://webapplog.com/asynchronicity-in-node-js/
var test = function (callback) {
  return callback();  
  console.log('test') //shouldn't be printed
}

var test2 = function(callback){
  callback();
  console.log('test2') //printed 3rd
}

test(function(){
  console.log('callback1') //printed first
  test2(function(){
  console.log('callback2') //printed 2nd
  })
});