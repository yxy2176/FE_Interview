function deepCopy(obj) {
  if (!obj || typeof obj !== "object") return;
  let newObj = Array.isArray(obj) ? [] : {};
  //   或者，写为：Object.keys(obj).forEach((key)=>{})
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}
