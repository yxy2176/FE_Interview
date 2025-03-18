function myNew(constructor, ...args) {
  {
    if (typeof constructor !== "function") return;
    let obj = {};
    obj.__proto__ = Object.create(constructor.prototype);
    let ret = constructor.call(obj, ...args);
    return typeof ret === "object" ? ret : obj;
  }
}

function myCreate(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

function deepCopy(obj, hash = new WeakMap()) {
  if (!obj || typeof obj !== "object") return;
  if (hash.has(obj)) return hash.get(obj);
  let newObj = Array.isArray(obj) ? [] : {};
  //  记得在hash里面存储一下
  hash.set(obj, newObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}

// 这个写完深拷贝后没看答案一次写完了 √
function shallowCopy(obj) {
  if (!obj || typeof obj !== "object") return;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    // proto=proto.prototype;  不要这么写，因为只有函数才有prototype属性
    proto = Object.getPrototypeOf(proto);
  }
}

function randomInt(min, max) {
  let minNum = Math.ceil(min);
  let maxNum = Math.floor(max);
  return Math.floor((maxNum - minNum + 1) * Math.random()) + minNum;
}

function toCase(str){
    const strArr=str.split("");
    for(i=0;i<strArr.length;i++){
        if(strArr[i]='_'){
            strArr.splice(i,1);
            strArr[i]=strArr(i).toUpperCase();
        }
    }
    return strArr.join("");
}


