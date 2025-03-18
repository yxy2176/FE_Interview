const readline = require('readline');

// 创建 readline 接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 监听输入行事件
rl.on('line', (line) => {
    // 解析输入的字符串为数组
    const nums = JSON.parse(line);

    // 核心函数：计算最长连续序列长度
    const longestConsecutive = function (nums) {
        const set = new Set(nums);
        let ans = 0;
        for (let num of set) {
            // 如果 set 中含有 num - 1，说明从 num - 1 开始遍历会得到更长的序列，跳过当前 num
            if (set.has(num - 1)) {
                continue;
            }
            let numNext = num + 1;
            // 不断检查下一个连续数字是否存在于集合中
            while (set.has(numNext)) {
                numNext++;
            }
            // 更新最长连续序列的长度
            ans = Math.max(ans, numNext - num);
        }
        return ans;
    };

    // 调用核心函数计算结果
    const result = longestConsecutive(nums);
    // 输出结果
    console.log(result);

    // 关闭 readline 接口，结束输入监听
    rl.close();
});