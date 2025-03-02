//instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
// left 是要检查的对象;
// right 是构造函数;
// 函数会判断 left 对象是否是 right 构造函数的实例
function myInstanceof(left, right) {
  // 1 获取对象的原型
  // Object.getPrototypeOf() 是获取对象原型的标准方法，建议在大多数情况下使用。
  // __proto__ 虽然方便，但不是标准属性，兼容性存在问题。
  let proto = Object.getPrototypeOf(left);
  // 2 获取构造函数的原型对象
  let prototype = right.prototype;
  // 循环遍历
  while (true) {
    // 如果 proto 为 null，说明已经遍历到原型链的尽头，返回 false
    if (proto == null) return false;
    // 如果 proto 等于 prototype，说明找到了匹配的原型，返回 true
    if (proto === prototype) return true;
    // 如果还没找到匹配的原型，继续向上查找原型链
    proto = Object.getPrototypeOf(proto);
  }
}

// 示例：
function Person() {}
const person = new Person();

console.log(myInstanceof(person, Person)); // 输出: true
console.log(myInstanceof(person, Object)); // 输出: true，因为所有对象都继承自 Object
console.log(myInstanceof({}, Array)); // 输出: false

// 关于原型链：
const grandParent = {
  grandMethod: function () {
    console.log("Grand method");
  },
};

const parent = Object.create(grandParent);
parent.parentMethod = function () {
  console.log("Parent method");
};

const child = Object.create(parent);

child.grandMethod(); // 输出: Grand method
child.parentMethod(); // 输出: Parent method

// 原型链：child -> parent -> grandParent
