// 作用：参数复用、延迟计算
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// 使用示例
function sum(a, b, c) {
  console.log(a + b + c);
}

let _sum = curry(sum);
let functionA = _sum(1);
let functionB = functionA(2);
functionB(3); //print: 6
