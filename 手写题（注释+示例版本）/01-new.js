function myNew(constructor, ...args) {
  // 1：检查传入的第一个参数是否为函数
  if (typeof constructor !== "function") return;
  // 2:创建一个空对象
  const obj = {};
  // 3:将这个新对象的内部原型链接到构造函数的 prototype 对象
  obj.__proto__ = Object.create(constructor.prototype); //  因为new 操作创建的对象会继承构造函数原型上的属性和方法
  // 4:使用构造函数初始化新对象
  let ret = constructor.call(obj, ...args); // 构造函数内部的 this 就指向了 obj，从而可以为 obj 添加属性和方法
  // 5:根据构造函数的返回值,决定最终返回的对象
  return ret instanceof Object ? ret : obj;
}

//
// 示例:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = myNew(Person, "John", 30);
console.log(person); // 输出: { name: 'John', age: 30 }

// 第五步的原因:构造函数返回值的不同情况
// (1) 构造函数返回对象类型的值
//      当构造函数显式地返回一个对象（如普通对象、数组、函数等）时  ===>   new 操作符最终返回的是构造函数返回的这个对象，而不是新创建的实例对象.
function ConstructorWithObjectReturn() {
  this.value = 10;
  return { anotherValue: 20 };
}
const instance1 = new ConstructorWithObjectReturn();
console.log(instance1); // 输出: { anotherValue: 20 }

// (2) 构造函数返回非对象类型的值
// 当构造函数返回非对象类型的值   ====>   new 操作符会忽略这个返回值，仍然返回新创建的实例对象。
function ConstructorWithPrimitiveReturn() {
  this.value = 10;
  return 20;
}
const instance2 = new ConstructorWithPrimitiveReturn();
console.log(instance2); // 输出: { value: 10 }
