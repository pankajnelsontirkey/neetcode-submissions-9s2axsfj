class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};

        let i = 0;
        while(i < nums.length){
            if(freq[nums[i]] === undefined){
                freq[nums[i]] = 1;
            }else {
                freq[nums[i]] += 1;
            }
            i++;
        }        

        const sortedFreqDesc = Object.entries(freq).sort((a, b) => b[1] - a[1]);
        
        return sortedFreqDesc.slice(0, k).map(item => item[0]);
        
    }
}
