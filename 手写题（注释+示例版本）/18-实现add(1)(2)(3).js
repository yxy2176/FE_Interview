// 柯里化的运用
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
