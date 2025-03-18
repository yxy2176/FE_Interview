function myFlat(arr, cnt = 1) {
  let newArr = [];
  for (let item of arr) {
    if (Array.isArray(item) && cnt > 0) {
      newArr.push(...myFlat(item, cnt - 1));
    } else {
      newArr.push(item);
    }
  }
  return newArr;
}

// 完全扁平化的调用  --->传入参数为Infinity
// arr.flat(Infinity)
