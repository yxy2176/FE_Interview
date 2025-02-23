Array.prototype.filter = function (fn) {
  const res = [];
  // 在每次循环中，调用传入的回调函数 fn，
  // 并将当前元素 this[i]、元素的索引 i 和数组本身 this 作为参数传递给它。
  // 如果回调函数返回 true，则将当前元素添加到结果数组 res 中。
  // 是 i<this.length   而不是 fn.length
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

// 使用示例：
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // 输出: [2, 4]
