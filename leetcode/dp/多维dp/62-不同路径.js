const readline = require("readline");

// 定义 uniquePaths 函数
var uniquePaths = function (m, n) {
  let dp = new Array(m);
  for (let k = 0; k < m; k++) {
    dp[k] = new Array(n);
  }
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

// 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 监听输入事件
rl.on("line", (line) => {
  // 按逗号分割字符串
  const parts = line.split(",");
  // 提取 m 的值
  const mPart = parts[0].split("=")[1].trim();
  const m = parseInt(mPart, 10);
  // 提取 n 的值
  const nPart = parts[1].split("=")[1].trim();
  const n = parseInt(nPart, 10);

  // 调用 uniquePaths 函数计算路径数量
  const result = uniquePaths(m, n);
  // 输出结果
  console.log(result);

  rl.close();
});
