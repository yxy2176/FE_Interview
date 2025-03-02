/**
 * 手写深拷贝(v2)
 * @param {*} obj
 * @param {*} hash WeakMap()解决循环引用和避免内存泄漏的问题
 * @returns
 */
function deepClone(obj, hash = new WeakMap()) {
  // 处理非对象或 null 的情况
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 处理循环引用
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  // 特殊对象处理部分：
  // 处理 Date 对象
  if (obj instanceof Date) {
    const copy = new Date(obj);
    hash.set(obj, copy);
    return copy;
  }

  // 处理 RegExp 对象  ——>  复制表达式和修饰符
  if (obj instanceof RegExp) {
    const copy = new RegExp(obj.source, obj.flags);
    hash.set(obj, copy);
    return copy;
  }

  // 处理 Map 对象   ——>  递归拷贝键值对或元素
  if (obj instanceof Map) {
    const copy = new Map();
    hash.set(obj, copy);
    obj.forEach((value, key) => {
      copy.set(deepClone(key, hash), deepClone(value, hash));
    });
    return copy;
  }

  // 处理 Set 对象
  if (obj instanceof Set) {
    const copy = new Set();
    hash.set(obj, copy);
    obj.forEach((value) => {
      copy.add(deepClone(value, hash));
    });
    return copy;
  }

  // 处理数组和普通对象
  const cloneObj = Array.isArray(obj)
    ? []
    : Object.create(Object.getPrototypeOf(obj));

  hash.set(obj, cloneObj);

  // 复制所有属性（包括 Symbol 类型）
  Reflect.ownKeys(obj).forEach((key) => {
    cloneObj[key] = deepClone(obj[key], hash);
  });

  return cloneObj;
}
