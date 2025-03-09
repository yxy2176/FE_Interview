function retryRequest(requestFunction, maxAttempts, delay) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    function makeRequest() {
      attempts++;
      requestFunction()
        .then(resolve)
        .catch((error) => {
          if (attempts < maxAttempts) {
            setTimeout(makeRequest, delay);
          } else {
            reject(error);
          }
        });
    }
    makeRequest();
  });
}

// 示例用法：
const maxAttempts = 3;
const delay = 1000; // 1秒钟
const fakeApiRequest = () => {
  return new Promise((resolve, reject) => {
    // 模拟一个请求，这里可以替换成实际的请求逻辑
    const success = Math.random() < 0.8; // 模拟80%的成功率
    if (success) {
      resolve("请求成功");
    } else {
      reject("请求失败");
    }
  });
};
retryRequest(fakeApiRequest, maxAttempts, delay)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("最大重试次数已达到，请求失败：", error);
  });
