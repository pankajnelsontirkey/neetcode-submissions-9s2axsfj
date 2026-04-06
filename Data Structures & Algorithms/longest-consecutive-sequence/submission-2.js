class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) {
            return 0;
        }

        const set = new Set(nums);

        let maxLength = 0, i = 0, currentLength = 0;


        for( let num of set){
            if(!set.has(num - 1)){
                currentLength = 1;
                while(set.has(num + currentLength)){
                    currentLength++;        
                }
                maxLength = Math.max(maxLength, currentLength);
            }
        }
        return maxLength;
        
    }
}
