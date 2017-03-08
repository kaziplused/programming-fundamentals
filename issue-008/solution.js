// implement your solution here
function sum(arg) {
  var sum = 0;
  var val = Array.prototype.slice.call(arguments, sum.length);
 for(i=0; i<val.length; i++){
     sum += val[i];

 }
return sum;

}


console.log(sum(1,2,2));
