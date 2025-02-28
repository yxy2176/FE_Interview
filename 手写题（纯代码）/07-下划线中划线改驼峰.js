const toCase = (str) => {
  const strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == "_") {
      strArr.splice(i, 1);
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  // 直接返回join后的值
  return strArr.join("");
};
