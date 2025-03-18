const readline = require("readline");

// 定义 minPathSum 函数
function minPathSum(grid) {
  let m = grid.length,
    n = grid[0].length;
  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[m - 1][n - 1];
}

// 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 监听输入事件
rl.on("line", (line) => {
  // 去除首尾的方括号    .slice(1,-1)的意思是：提取index=1的字符到index最后一个字符（不包括最后一个）
  line = line.slice(1, -1);
  // 分割出每行数据
  const rows = line.split("],[");
  const grid = [];
  for (let rowStr of rows) {
    // 去除每行首尾可能多余的方括号和空格
    rowStr = rowStr.replace(/^\[|\]$/g, "");
    // 将每行的数字分割并转换为数组
    const row = rowStr.split(",").map(Number);
    grid.push(row);
  }
  // 调用 minPathSum 函数计算最小路径和
  const result = minPathSum(grid);
  // 输出结果
  console.log(result);
  rl.close();
});
