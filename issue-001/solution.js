function dataTypeCheck(a) {
    // implement your solution here
    if ( typeof a ==="string" && isNaN(a)) {
    // in case  a is an ordinary string

    return "hello" + " "+ a ;
 }
 else if (typeof a ==="number" && a % 1===0) {
  // in case  a is an integer
  return  a/2;

}
else if (typeof a === "number" && a % 1 !== 0) {
  // in case a is a float
  return a*2;

}
else if(typeof Number(a) === "number"){
     return Number(a);
   }

else if (isNaN(a)) {
  //in case  a is NaN
 return 0;
}

else if ( typeof a !== "string" && isNaN(a) === false) {
 // in case  a is null
 return 0;

}
else if (typeof a ==='undefined') {
  // in case  a is a undefined
  return false;
}
else{
 a="please input again"
 return a;
}
}
