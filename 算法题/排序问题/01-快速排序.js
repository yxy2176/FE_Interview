/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length < 2) return nums;
  return quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, left, right) {
  // 小数组使用插入排序
  if (right - left + 1 <= 15) {
    insertionSort(nums, left, right);
    return nums;
  }
  // 递归出口
  if (left >= right) return;
  let pivotIndex = partition(nums, left, right);
  quickSort(nums, left, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, right);
  return nums;
}

function partition(nums, left, right) {
  // 随机选择基准并交换到最右侧
  const randomIndex = Math.floor(Math.random() * (right - left + 1)) + left;
  [nums[randomIndex], nums[right]] = [nums[right], nums[randomIndex]];

  const pivot = nums[right];
  let leftIndex = left;

  for (let i = left; i < right; i++) {
    if (nums[i] < pivot) {
      [nums[i], nums[leftIndex]] = [nums[leftIndex], nums[i]];
      leftIndex++;
    }
  }
  // 在遍历完数组之后，leftIndex 所指向的位置就是基准元素最终应该所在的位置
  [nums[leftIndex], nums[right]] = [nums[right], nums[leftIndex]];
  return leftIndex;
}
