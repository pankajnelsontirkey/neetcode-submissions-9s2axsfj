class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // const prefix = [], suffix = [];
        // let pProd = 1,  sProd = 1;

        // for(let i = 0; i < nums.length; i++){
        //     pProd *= (nums[i - 1]  ?? 1);
        //     prefix.push(pProd);
        // }

        // let j = nums.length - 1;
        // while(j >= 0){
        //     sProd *= (nums[j + 1] ?? 1);
        //     suffix.unshift(sProd);
        //     j--;
        // }

        // const outputs = [];

        // let k = 0;
        // while ( k < nums.length){
        //     outputs.push(prefix[k] * suffix[k]);
        //     k++;
        // }

        // return outputs;


        /**
         * prefix/postfix 
         */

        const output = new Array(nums.length).fill(1);
        let prefix = 1;

        let i = 0; 
        while(i < nums.length){
            output[i] = prefix;
            prefix *= nums[i];
            i++;
        }

        let postfix = 1;
        let j = nums.length - 1;
        while(j >= 0){
            output[j] *= postfix;
            postfix *= nums[j];
            j--;
        }
        
        return output;
    }
}
