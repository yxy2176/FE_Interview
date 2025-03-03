// 1、使用闭包实现
for (var i = 0; i < 5; i++) {
  // (function(i) { ... })(i); 这种写法是立即执行函数表达式
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })(i);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// 3、async + await + Promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTimers() {
  for (let i = 0; i < 5; i++) {
    await delay(i * 1000);
    console.log(i);
  }
}

runTimers();
