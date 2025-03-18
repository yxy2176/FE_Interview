function myNew(constructor, ...args) {
  if (!constructor || typeof constructor !== "function") return;
  let obj = {};
  obj.__proto__ = constructor.prototype;
  let ret = constructor.call(obj, ...args);
  return typeof ret === "object" ? ret : obj;
}
