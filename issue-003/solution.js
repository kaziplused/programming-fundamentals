function product(a, b) {
    // implement your solution here
    try {
     if(a == ""|| b == "") throw "NaN exception";
     if(isNaN(b) || isNaN(a)) throw "NaN exception";
     a = Number(a);
     b = Number(b);
     return a*b;
 }
 catch(err) {
     console.log(err);
 }
}
