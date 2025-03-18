const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout, // 修正为 output
});

function setZeros(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const rowsToZero = {};
  const colsToZero = {};

  // 标记需要置零的行和列
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rowsToZero[i] = true;
        colsToZero[j] = true;
      }
    }
  }

  // 将标记的行置零
  for (let i in rowsToZero) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  // 将标记的列置零
  for (let j in colsToZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][j] = 0;
    }
  }

  return matrix; // 返回修改后的矩阵
}

rl.on("line", (line) => {
  line = line.slice(1, -1);
  let rows = line.split("],[");
  const matrix = [];
  for (let rowStr of rows) {
    rowStr = rowStr.trim().replace(/^\[|\]$/g, "");
    const row = rowStr.split(",").map(Number);
    matrix.push(row);
  }
  let newMatrix = setZeros(matrix);
  // 格式化输出结果
  const output = `[${newMatrix.map((row) => `[${row.join(",")}]`).join(",")}]`;
  console.log(output);
  //   console.log(newMatrix);
  rl.close();
});
