// implement your solution here
function superSum(arg) {

  var sum = 0;
  for(i=0; i<arg.length; i++){
   if (typeof arg[i] === 'number'){
     var total = 0;
     val = (arg[i]).toString(10).split("").map(Number);
     for(y=0; y<val.length; y++){
       total += val[y];
     }
     sum += total;
   }

  }
  return sum;
}

var a = [200, 300, 402];

console.log(superSum(a));
