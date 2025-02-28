// 使用 new Array() 构造函数创建一个长度为 n + 1 的数组
// 这个数组中的元素都是空的，也就是数组里并没有实际的值，只有指定的长度
// 将分隔符设置为字符串 s，由于数组中有 n + 1 个空元素，使用 s 连接这些空元素时，s 会被插入 n 次，从而实现字符串 s 重复 n 次的效果
function myRepeat1(s, n) {
  return new Array(n + 1).join(s);
}

// 递归方法：
function myRepeat2(s, n) {
  return n > 0 ? s.concat(repeat(s, --n)) : "";
}
