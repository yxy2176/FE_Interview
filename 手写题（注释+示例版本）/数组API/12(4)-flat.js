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

// 完全扁平化的调用  --->传入参数为Infinity
// arr.flat(Infinity)

const flat = (arr, depth = 1) => {
  let res = []; //必须是let
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth) {
      res = res.concat(flat(arr[i], depth - 1)); //返回新数组
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};
