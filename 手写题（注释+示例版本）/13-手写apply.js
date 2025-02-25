// 与call的区别在于，call第二个参数为...args，而apply的第二个参数为args
Function.prototype.myApply = function (ctx, args) {
  if (typeof this !== "function") return;
  const fn = Symbol();
  ctx[fn] = this;
  const res = ctx[fn](...args);
  delete ctx[fn];
  return res;
};
