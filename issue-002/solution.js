function strictCheck(a, b) {
    // implement your solution here
    if(typeof a === typeof b){
      return 1;
    }
    else if(a == b){
      return true;
    }
    else if(a != b){
      return false;
    }
}
