function product(a, b) {
    // implement your solution here
    if(typeof a != 'number' && typeof b != 'number'){
      
       throw new Error("NaN Expection");
    }
    else if(typeof a == 'number' && typeof b == 'number'){
      return a * b;
    }
}
