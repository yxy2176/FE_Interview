function getType(value) {
  if (value === null) return value + "";
  else if (typeof value === "object") {
    let str = Object.prototype.toString.call(value); //例如[Object Date]
    let type = str.split(" ")[1].split("");
    type.pop();
    return type.join("").toLowerCase();
  } else {
    return typeof value;
  }
}

function getType1(value) {
  if (value === null) return value + "";
  else if (typeof value === "object") {
    let str = Object.prototype.toString.call(value); //例如[Object Date]
    let type = str.split(" ")[1].slice(0, -1);
    return type.toLowerCase();
  } else {
    return typeof value;
  }
}
