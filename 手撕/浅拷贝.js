function shallowCopy(obj) {
  if (!obj || typeof obj !== "object") return;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnPropertyOf(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
