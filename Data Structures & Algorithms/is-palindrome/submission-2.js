class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphanum = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        let i = 0, j = alphanum.length - 1 ;
        
        while (i < j){
            if(alphanum[i] !== alphanum[j]){
                return false
            }
            i++; 
            j--;
        }
        return true;
    }
}
