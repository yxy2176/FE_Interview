function deepCopy(obj, hash = new WeakMap()) {
  if (!obj || typeof obj !== "object") return;
  if (hash.has(obj)) return hash.get(obj);
  let newObj = Array.isArray(obj) ? [] : {};
  hash.set(obj, newObj);
  //   或者，写为：Object.keys(obj).forEach((key)=>{})
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key], hash) : obj[key];
    }
  }
  return newObj;
}
