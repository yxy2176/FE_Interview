/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let ans = "";
  let cnt = 0;
  do {
    let cur = n % 10;
    n = Math.floor(n / 10); //舍弃小数位  不然123.4 下一步再123.4%10 ->cur变3.4了
    ans += cur.toString();
    cnt++;
    if (cnt % 3 === 0 && n) {
      ans += ".";
    }
  } while (n);
  return ans.split("").reverse().join("");
};

// 或者直接 return n.toLocaleString("de-DE");            【参考MDN】
