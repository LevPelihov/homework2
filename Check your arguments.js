function objectType(obj) {
    if (arguments.length === 0) {
      obj = null;
      return Object.prototype.toString.call(obj);
    }
    if (obj === undefined) {
      return Object.prototype.toString.call(obj); 
    }
    
    return Object.prototype.toString.call(obj);
  }