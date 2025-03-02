function myDebounce(fn, delay, immediate = false) {
  let timer = null;
  let isInvoke = false; //记录fn是否被调用过
  const _debounce = function (...args) {
    if (immediate && isInvoke) {
      fn.apply(this, args);
      isInvoke = true;
    } else {
      timer = setTimeout(() => {
        fn.call(this, ...args);
        isInvoke = false; // 执行完函数后，将 isInvoke 标记为 false，以便下次可以再次立即执行
      }, delay);
    }
  };
  return _debounce;
}
