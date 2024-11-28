function numbers(...num) {
    let res = true;
    num.map(function(i) { typeof i == "number"? typeof i : res = false  });
    return res;
  }  