const randomInt = (min, max) => {
//   if (min > max) {
//     throw new Error(
//       "The minimum value cannot be greater than the maximum value."
//     );
//   }
  // 向上取整
  let minNum = Math.ceil(min);
  // 向下取整
  let maxNum = Math.floor(max);

  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};


// (maxNum - minNum + 1)：计算出指定范围内整数的个数
// Math.random() * (maxNum - minNum + 1)：将随机小数乘以整数个数，得到一个范围在 0 到 (maxNum - minNum + 1) 之间的随机小数。
// Math.floor(Math.random() * (maxNum - minNum + 1))：向下取整，得到 0 到 maxNum - minNum 之间的随机整数
// Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum：将上述得到的随机整数加上 minNum，得到最终的随机整数