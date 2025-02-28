function myFlat(arr, depth) {
  if (!Array.isArray(arr) || depth <= 0) {
    return;
  }
  return arr.reduce((prev, cur) => {
    // 如果当前遍历的还是数组，继续递归
    if (Array.isArray(cur)) {
      return prev.concat(myFlat(cur, depth - 1));
      // 若不是数组，则直接拼接进最终结果
    } else {
      return prev.concat(cur);
    }
  }, []);
}

// 完全扁平化的调用：
// arr.flat(Infinity)
