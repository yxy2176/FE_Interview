/**
 * 手写节流：
 * 节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。
 * 节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。
 * @param {*} fn 回调函数
 * @param {*} delay 延迟执行时间
 * @returns 
 */
//写法一：基于 setTimeout 的实现 —————— 需要确保函数最终执行的场景
function throttle(fn, delay) {
  return function (...args) {
    if (timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  };
}

// 写法二：基于时间戳的实现 —————— 需要立即执行的场景
function throttle(fn,delay){
    let lastCallTime = Date.now()
    return function(...args){
        let nowTime = Date.now();
        // 如果两次时间间隔超过了指定时间，则执行函数。
        if(nowTime - lastCallTime >=wait){
            lastCallTime=Date.now();;
            return fn.apply(ctx,args);
        }

    }
}

