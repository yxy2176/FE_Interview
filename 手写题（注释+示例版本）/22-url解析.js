const parseURL = (url) => {
  const tempUrl = url.split("?")[1] || "";
  const resObj = {};
  for (const str of tempUrl.split("&")) {
    if (!str) continue;
    let [keyEncoded, valueEncoded] = str.split("=");
    const key = decodeURIComponent(keyEncoded || "").trim();
    //全局替换+号为空格  ---> 为了处理 URL 查询字符串中 + 符号代表空格的情况
    const value = decodeURIComponent(valueEncoded || "").replace(/\+/g, " ");
    if (!key) continue; //忽略无键的情况
    if (resObj.hasOwnProperty(key)) {
      // 或者写为 resObj[key]=[].concat(resObj[key],value);
      resObj[key] = [...[resObj[key]], value];
    } else {
      resObj[key] = value;
    }
  }
  return resObj;
};

// 简单写法
const parseUrl = (url) => {
  const tmpUrl = url.split("?")[1];
  const resObj = {};
  for (const str of tmpUrl.split("&")) {
    let [key, value] = str.split("=");
    value = decodeURIComponent(value);
    if (resObj.hasOwnProperty(key)) {
      resObj[key] = [].concat(resObj[key], value);
    } else if (value == "undefined") {
      // !!!
      resObj[key] = true;
    } else {
      resObj[key] = value;
    }
  }
  return resObj;
};
