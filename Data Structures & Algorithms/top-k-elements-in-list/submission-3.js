class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /* Map frequencies -> sort by frequency */
        // const freq = {};

        // let i = 0;
        // while(i < nums.length){
        //     if(freq[nums[i]] === undefined){
        //         freq[nums[i]] = 1;
        //     }else {
        //         freq[nums[i]] += 1;
        //     }
        //     i++;
        // }        

        // const sortedFreqDesc = Object.entries(freq).sort((a, b) => b[1] - a[1]);
        // return sortedFreqDesc.slice(0, k).map(item => item[0]);
        
        /* ---------------- */
        
        /* Bucket sort version */
        const count = {};
        
        for(const n of nums){
            count[n] = (count[n] ?? 0) + 1;
        }

        const freq = new Array(Math.max(...Object.values(count)) + 1);

        for(let key in count){            
            if(!freq[count[key]]){
                freq[count[key]] = [];
            }
            freq[count[key]].push(parseInt(key));            
        }

        console.log('freq', freq);        

        const res = [];

        let  i = freq.length - 1;
        while(i > 0){
            let j = 0;
            if(freq[i]){
                while(j < freq[i].length){                
                    res.push(freq[i][j]);                
                    if(res.length === k) {
                        return res;
                    }
                    j++
                }
            }
            
            i--;
        }

        
    }
}
