Function.prototype.myBind = function (ctx, ...args1) {
  if (typeof this !== "function") return;
  const fn = this;
  return new (function (...args2) {
    const allArgs = [...args1, ...args2];
    // 检测函数是否是通过 new 调用的​（即构造函数调用）
    if (new.target) {
      return new fn[allArgs]();
    } else {
      // 函数内部使用 apply 来绑定函数调用
      return fn.apply(ctx, allArgs);
    }
  })();
};
