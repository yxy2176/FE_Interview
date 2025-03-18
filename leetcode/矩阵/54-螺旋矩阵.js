// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function spiralOrder(matrix) {
  const ans = [];
  let dx = 0;
  const m = matrix.length,
    n = matrix[0].length;
  let i = 0,
    j = 0;
  for (let k = 0; k < m * n; k++) {
    ans[k] = matrix[i][j];
    matrix[i][j] = Infinity;
    let x = i + DIRS[dx][0];
    let y = j + DIRS[dx][1];
    //   判断下一步是否出界
    if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] === Infinity) {
      dx = (dx + 1) % 4;
    }
    i = i + DIRS[dx][0];
    j = j + DIRS[dx][1];
  }

  return ans;
}

rl.on("line", (line) => {
  line = line.slice(1, -1);
  const rowStr = line.split("],[");
  const matrix = [];
  for (let row of rowStr) {
    row = row.replace(/^\[|\]$/, ""); //去掉可能的首尾[ / ]
    matrix.push(row.split(","));
  }
  const ans = spiralOrder(matrix);
  const output = `[${ans.join(",")}]`;
  console.log(output);
});
