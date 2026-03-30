class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        let i  = 0;
        while(i < strs.length){
            const sortedStr = strs[i].split('').sort().join('');
            if(!map[sortedStr]){
                map[sortedStr] = [];                
            }
            map[sortedStr].push(strs[i]);

            i++;
        }

        

        

        return Object.values(map);
    }
}
