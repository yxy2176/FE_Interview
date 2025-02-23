const thousandSeparator = function () {
  n = n.toString();
  let cnt = 0;
  let arr = [];
  for (let i = n.length - 1; i >= 0; i--) {
    if (cnt < 4) {
      arr.push(n[i]);
    } else {
      // arr.push([".", num])  =>  输出: [ [ '.', '5' ] ]
      // arr.push(...[".", num]);  =>  输出: [ '.', '5' ]
      arr.push(...[".", n[i]]);
      cnt = 1;
    }
  }
  //  ['1', '.', '2', '3', '4']  =>  [ '4', '3', '2', '.', '1' ]   =>   输出："432.1"
  return arr.reverse().join();
};
