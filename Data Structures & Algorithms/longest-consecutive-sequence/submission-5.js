class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        /* Hashmap solution */
        const map = new Map();
        
        let max = 0;

        for(let num of nums){
            if(map.has(num)) continue;

           const left = map.get(num - 1) ?? 0;
            const right = map.get(num + 1) ?? 0;
            const total = left + right + 1;

            max = Math.max(max, total);

            map.set((num - left), total);
            map.set((num + right), total);
            map.set(num, total);
        }

        return max;
    }
}
