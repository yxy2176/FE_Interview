// 1、通过call调用数组的slice方法：
// 将 slice 方法的 this 指向类数组对象 arrayLike，从而让类数组对象也能使用 slice 方法。
// 当不传递参数时，slice 会返回一个包含原数组所有元素的新数组。
Array.prototype.slice.call(arrayLike);

// 2、通过call调用数组的splice方法：
// 传入参数 0 时，它会从索引 0 开始删除类数组对象中的所有元素，并返回一个包含这些元素的新数组
Array.prototype.splice.call(arrayLike, 0);

// 3、通过apply调用数组的concat方法：
// 将 concat 方法的 this 指向一个空数组 []，并将类数组对象 arrayLike 作为参数传递给 concat 方法
Array.prototype.concat.apply([], arrayLike);

// 4、通过Array.from方法：
// ES6 中新增的方法，专门用于将 类数组对象 或 可迭代对象 转换为真正的数组
Array.from(arrayLike);

// 原理：运用slice,splice,concat返回 新数组 的特性
