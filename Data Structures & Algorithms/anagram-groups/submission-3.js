class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // const map = {};

        // let i  = 0;
        // while(i < strs.length){
        //     const sortedStr = strs[i].split('').sort().join('');
        //     if(!map[sortedStr]){
        //         map[sortedStr] = [];                
        //     }
        //     map[sortedStr].push(strs[i]);

        //     i++;
        // }
        // return Object.values(map);

        const res = {};

        for(let str of strs){
            const count = new Array(26).fill(0);
            for(let char of str){
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            if(res[count] === undefined) {
                res[count] = [];
            }
            res[count].push(str); // res = { '[3,2,0,1]': ['act', 'cat', 'tca'] }
        }
    
        return Object.values(res);
    }
}
