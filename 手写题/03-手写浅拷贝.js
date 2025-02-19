function shallowCopy(obj) {
  if (!obj || typeof obj !== "object") return;
  // 根据obj的类型判断是新建一个数组还是新建一个对象
  let newObj = Array.isArray(obj) ? [] : {};
  // 遍历obj，并判断如果是obj自己的属性时才拷贝
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
