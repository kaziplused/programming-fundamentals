    function dataTypeCheck(a) {
 
     if ( typeof a ==="string" && isNaN(a)) {
    return "hello" + " "+ a ;
  }
  else if (typeof a ==="number" && a % 1===0) {
 return  a/2;
 
 }
 else if (typeof a === "number" && a % 1 !== 0) {
 
  return a*2;
 
 }
 else if(typeof Number(a) === "number"){
     return Number(a);
   }
 
 else if (isNaN(a)) {

  return 0;
 }
else if ( typeof a !== "string" && isNaN(a) === false) {
return 0;
 
 }
 else (typeof a ==='undefined') {
  return false;
 }
 }
