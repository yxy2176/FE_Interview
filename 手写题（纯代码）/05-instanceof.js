function myInstanceof(obj, F) {
  let proto = Object.getPrototypeOf(obj);
  let prototype = F.prototype;
  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
