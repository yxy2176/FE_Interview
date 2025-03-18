let url = "https://soundheart.cn?user=miku&user=chengxin&password=%E5%8C%97%E4%BA%AC&OK";

const getUrlParams = (string) => {
  const cur = string.split("?")[1]; //匹配 ?以后的字符
  let curArr = cur.split("&");
  const res = new Map();
  for (let item of curArr) {
    console.log(item);
    let [key, value] = item.split("=");
    // decodeURIComponent 则可将编码后的字符还原为原始字符
    let fakeValue = decodeURIComponent(value);
    if (res.get(key)) {
      let newRes = res.get(key);
      res.set(key, newRes.concat(value));
    } else {
      // 传入非字符串值时，fakeValue会等于undefined
      res.set(key, fakeValue === "undefined" ? true : fakeValue);
    }
  }
  console.log(res, "res");
  return res;
};

getUrlParams(url);
