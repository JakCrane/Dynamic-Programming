//time complexity of 2^n

//  const fib = (n) => {
//      if (n <= 2) return 1;
//      return fib(n-1) + fib(n-2)
//  }
//  console.log(fib(42));

// memoization: storing duplicate sub problems to get later on
// need to store outputs in a data structure. java script object
// key is arg, val is output
// as memo '= {}' is only activated when no second argument is passed in it only works on a top level call
 
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
    
}
console.log(fib(42));