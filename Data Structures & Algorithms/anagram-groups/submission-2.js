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

    for(let s of strs){
        const count = new Array(26).fill(0);
        for(let c of s){
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] +=1;

        }

        if(!res[count]){
            res[count] = [];        
        }
        res[count].push(s);
    }
  
    return Object.values(res);
    }
}
