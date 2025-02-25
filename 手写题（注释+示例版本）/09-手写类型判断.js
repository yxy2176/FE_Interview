// 返回传入参数 value 的数据类型：
// 它能够处理多种情况，包括：
// null
// 引用类型（如对象、数组、日期等）
// 以及基本数据类型（如 number、string、boolean 等）
// 函数类型
function getType(value){
    if(value===null){
        return value+"";
    }
    // 引用类型
    if(typeof value ==="object"){
        let valueClass = Object.prototype.toString.call(value),  // 返回 [object Type]，例如 [object Array]、[object Date]
            type = valueClass.split(" ")[1].split(""); // 使用 split("") 将其转换为字符数组。
        type.pop();   //例如：去掉Array] 最后那个括号
        return type.join("").toLowerCase();
    }else{
        return typeof value;
    }
}