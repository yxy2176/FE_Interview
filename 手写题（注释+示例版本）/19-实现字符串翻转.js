String.prototype._reverse = function (a) {
  return a.split("").reverse().join("");
};

// 示例：
let obj = new String();
let res = obj._reverse("hello");
console.log(res); //olleh

// 注：必须通过实例化对象之后再去调用定义的方法，否则找不到该方法。
