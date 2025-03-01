function myNew(constructor, ...args) {
  if (!constructor || typeof constructor !== "function") return;
  let obj = {};
  obj.__proto__ == Object.create(constructor.prototype);
  let ret = constructor.call(obj, ...args);
  return ret instanceof Object ? ret : obj;
}
