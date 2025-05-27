const twoSum = (nums, target) =>{
    for(let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
    return [];
}

console.log(twoSum([2, 0, 8, 6, 7], 9));