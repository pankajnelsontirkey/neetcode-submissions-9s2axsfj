class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const outputs = [];
        let i = 0;
        while(i < nums.length){
            let product = 1;
            let j = 0;
            while(j < nums.length){
                if(i !== j ){
                    product *= nums[j];
                }
                j++;
            }
            outputs.push(product);
            i++;
        }

        return outputs;
    }
}
