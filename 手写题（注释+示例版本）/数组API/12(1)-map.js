Array.prototype.map = function (fn) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(fn(this[i], i, this));
  }
  return res;
};

// 在 JavaScript 中，Array.prototype.map 方法接收一个回调函数作为参数，这个回调函数可以接收三个参数，其顺序为：
// 当前元素的值：表示当前正在处理的数组元素。     <---------------
// 当前元素的索引：表示当前元素在数组中的位置。
// 调用 map 方法的数组本身：可以让回调函数访问到整个数组。
const newArray = arr.map(function (currentValue, index, array) {
  // 返回一个新的值，用于构建新数组
  return someValue;
});

// 使用示例：
const numbers = [1, 2, 3];
const squared = numbers.map((num) => num * num);
console.log(squared); //输出：[1,4,9]
