// implement your solution here
function selectSum(arg) {
   var sum = 0;
  for(i=0; i<arg.length; i++){
    if (typeof arg[i] === 'number'){
      sum += arg[i];
    }

  }
return sum;
}

var a = [10, 6, 4];
var b = ['a', 20, 30, 'x', 'y'];
var c = ['a', 'b', 'c'];

console.log(selectSum(c));
