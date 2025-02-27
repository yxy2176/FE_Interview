/**
 * 手写防抖：
 * 函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时
 * -----> 避免因为用户的多次点击向后端发送多次请求
 * @param {*} fn 回调函数
 * @param {*} delay 缓冲时间
 */

function debounce(fn, delay) {
  // 创建一个标记用来存放定时器
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// clearTimeout()清除了定时器之后timer会变成一个类型为Number的数字，所以timer为true，下次就不生效了。所以要设置为null

// 实例：
// 使用防抖函数包装搜索函数
const debouncedSearch = debounce(search, 300);
// 监听输入框的输入事件
searchInput.addEventListener("input", function (event) {
  const query = event.target.value;
  debouncedSearch(query);
});
