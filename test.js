const fd = (nums) => {
  const freq = {};
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    const res = (freq[e] = (freq[e] || 0) + 1);
    if (res === 2) return e;
  }
};

const nums = [1, 0, 2, 2, 5, 3, 7, 6];
console.log(fd(nums));
