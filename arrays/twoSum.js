const twoSum = (nums, target) => {
  let pointerA = 0;
  let pointerB = nums.length - 1;
  let sum = nums[pointerA] + nums[pointerB];
  

  while (pointerA < pointerB) {
    
    if (sum === target) {
      let pair = [pointerA, pointerB];
      console.log(pair);
      return pair;
    } else if (sum < target) {
      pointerA++;
    } else {
      pointerB--;
    }
  }
  return [];
};

twoSum([2, 9, 8, 7, 12], 9);
