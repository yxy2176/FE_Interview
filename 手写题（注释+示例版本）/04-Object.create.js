// 手写Object.create
// =>用于创建一个新对象，并且让这个新对象继承自指定的原型对象
// 思路：将传入的对象作为原型
function create(obj) {
  // 定义一个空的构造函数 F
  function F() {}
  F.prototype = obj;
  return new F();
}



// 使用示例：
// 定义一个原型对象
const person = {
  greet: function () {
    console.log(`Hello!`);
  },
};

// 使用 create 函数创建一个新对象，继承自 person
const newPerson = create(person);

// 调用继承的方法
newPerson.greet(); // 输出: Hello!
