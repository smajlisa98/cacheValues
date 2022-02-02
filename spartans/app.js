function doSomething(n,m){
    return n+m;
}

const memo = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];  
    let m = args[1];
    if (n in cache) {
     
      let value = cache[n];
      let value1 = value.split('-')[0];
      let value2 = value.split('-')[1];
      if(value1 == m){
        console.log('Dovlacenje iz cache 1');
        return value2;
      }
    }
    else if(m in cache){
      let value = cache[m];
      let value1 = value.split('-')[0];
      let value2 = value.split('-')[1];
      if(value1 == n){
        console.log('Dovlacenje iz cache 2');
        return value2;
      }
    }
    else {
      console.log('Racunanje rezultata');
      let result = fn(n,m);
      let result1 = m.toString().concat('-'  ,result);
      cache[n] = result1;
      return result;
    }
  }
}
const newFunction = memo(doSomething);

console.log(newFunction(3,4));  // racuna
console.log(newFunction(3,4));  // cached
console.log(newFunction(4,3));  // cached