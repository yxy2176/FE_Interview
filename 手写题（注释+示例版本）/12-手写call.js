Function.prototype.myCall = function (ctx, ...args) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") return;
  // 判断传入上下文对象是否存在，如果不存在，则设置为 window
  ctx = ctx || window;
  //   使用唯一 Symbol 作为属性名，将当前函数（this）临时添加到 ctx 对象，避免属性冲突。
  const fn = Symbol();
  ctx[fn] = this;
  const result = ctx[fn](...args);
  //   执行后删除临时属性，避免污染 ctx 对象
  delete ctx[fn];
  return result;
};

// 使用示例：
// 定义一个函数
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

// 定义一个对象
const person = {
  name: "Alice",
};

// 使用 myCall 显式绑定 this 到 person 对象
greet.myCall(person, "Hello"); // 输出: Hello, Alice!
