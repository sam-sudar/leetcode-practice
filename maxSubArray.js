function maxSubArray(nums, a) {
  let mainSum = 0;
  let temp = 0;
  for (let i = 0; i < a; i++) {
    mainSum = mainSum + nums[i];
  }
  temp = mainSum;
  console.log("First mainSum: ", mainSum);
  for (let i = a; i < nums.length; i++) {
    // console.log(nums[i - a]);
    // console.log(nums[i]);

    temp = temp - nums[i - a] + nums[i];
    console.log("Temp", temp);
    console.log("Main: ", mainSum);
    if (temp > mainSum) {
      mainSum = temp;
      console.log("New Main: ", mainSum);
    }
  }
  console.log(mainSum);
}

maxSubArray([4, 2, 1, 6, 7, 1, 3], 4);

// On my own, well done brother. Good job
// Time Complexity - O(n)
// Space Complexity - O(1)
