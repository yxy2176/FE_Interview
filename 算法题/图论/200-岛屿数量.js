const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function numIslands(grid) {
  const m = grid.length,
    n = grid[0].length;
  let ans = 0;
  function dfs(x, y) {
    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] != "1") return;
    grid[x][y] = "2";
    dfs(x + 1, y);
    dfs(x, y + 1);
    dfs(x - 1, y);
    dfs(x, y - 1);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == "1") {
        dfs(i, j);
        ans++;
      }
    }
  }
  return ans;
}

let grid = [];
rl.on("line", (line) => {
  const rows = line.split("],[");
  for (let row of rows) {
    row = row.replace(/^\[|\]$/g, "");
    row = row.replace(/"/g, "");
    const rowArr = row.split(",");
    grid.push(rowArr);
  }
  const ans = numIslands(grid);
  console.log(ans);

  rl.close();
});
