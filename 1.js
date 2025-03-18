const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on("line",(line)=>{
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

    const result = longestConsecutive(nums);
    console.log(result);

    rl.close();
    
})