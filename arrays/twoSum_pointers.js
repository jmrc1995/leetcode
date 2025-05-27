const twoSum_pointers = (nums, target) => {
  let pointerA = 0;
  let pointerB = nums.length - 1;

  while (pointerA < pointerB) {
    let sum = nums[pointerA] + nums[pointerB]; // 👈 moved inside loop

    if (sum === target) {
      return [pointerA, pointerB];
    } else if (sum < target) {
      pointerA++;
    } else {
      pointerB--;
    }
  }

  return [];
};

const result = twoSum_pointers([2, 9, 8, 7, 12], 9);
console.log(result);
