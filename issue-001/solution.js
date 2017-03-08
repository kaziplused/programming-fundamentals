function dataTypeCheck(a) {
    // implement your solution here

    if(typeof a === "undefined"){

        return 0;
    }
    else if(isNaN(a)){
        return 0;
    }
    else if ( typeof a ==="string" && typeof Number(a) !== "number" ) {
      results = "hello" + " "+ a;
     return results;
    }
    else if(typeof a === "number"){
      results = a/2;
    	return results;
    }
    else if(typeof Number(a) == "number"){
    	return Number(a);
    }
    else if(typeof a === "null"){
    	return 0;
    }

}
var data = 'hello';
console.log(dataTypeCheck(data));
