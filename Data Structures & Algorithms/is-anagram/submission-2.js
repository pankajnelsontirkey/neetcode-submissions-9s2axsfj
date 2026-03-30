class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if(s.length !== t.length) {
        //     return false;
        // }

        // const mapS = {};
        // const mapT = {};

        // for(let char of s){
        //     if(mapS[char]){
        //         mapS[char] += 1;
        //     }else {
        //         mapS[char] = 1;
        //     }
        // }

        // for(let char of t){
        //     if(mapT[char]){
        //         mapT[char] += 1;
        //     }else {
        //         mapT[char] = 1;
        //     }
        // }

        // for(let key in mapS){
        //     if(!mapT[key]){
        //         return false
        //     }
        //     if(mapT[key] !== mapS[key]){
        //         return false
        //     }            
        // }
        // return true;

        // return s.split('').sort().join('') === t.split('').sort().join('');

    return s.length !== t.length ? false : s.split('').sort().join('') === t.split('').sort().join('');

        
    }
}
