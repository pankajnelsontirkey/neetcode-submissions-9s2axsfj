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

        const result = []

        for(let key in map){
            const values = map[key];
            result.push(values)
        }

        return result
    }
}
