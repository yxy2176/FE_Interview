function deepCopy(obj) {
  if (!obj || typeof obj !== "object") return;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof key === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}
