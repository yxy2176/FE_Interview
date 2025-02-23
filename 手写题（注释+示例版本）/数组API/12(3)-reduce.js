Array.prototype.reduce = function(fn,initValue){
    let res,start = 0;
    if(arguments.length!==1){
        res = initValue;
    }else{
        res=this[0];
        start=1;
    }
    for(let i=start;i<this.length;i++){
        res=fn(res,this[i],i,this)
    }
    return res;
}





// reduce 方法是 JavaScript 数组的一个高阶函数，用于对数组中的元素进行累积计算。
// 它接收一个回调函数,
// 和一个可选的初始值作为参数。
// 回调函数可以接收四个参数：
// 1 -> accumulator（累加器）：用于累积每次回调函数的返回值，在第一次调用回调函数时，其值取决于是否提供了初始值。
// 2 -> currentValue（当前值）：表示数组中当前正在处理的元素。
// 3 -> currentIndex（当前索引）：表示当前正在处理的元素的索引。
// 4 -> array（数组）：表示调用 reduce 方法的数组本身。