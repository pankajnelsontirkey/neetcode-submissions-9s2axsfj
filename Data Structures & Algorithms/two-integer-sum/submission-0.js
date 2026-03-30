class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        const pairFound = []
        nums.forEach((item, index) => {
            const toBeFound = target - item;
            if(!map.has(item)){
                map.set(toBeFound, index)
            }else {
                pairFound.push(map.get(item), index)
            }
        })
        return pairFound
    }
}
