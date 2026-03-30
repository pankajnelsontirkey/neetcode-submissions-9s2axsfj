class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0){ return ''; }

        const sizes = [];
        let res = '';

        for(let str of strs){
            sizes.push(str.length);
        }

        for(let size of sizes){
            res += size + ',';
        }

        res += '#';

        for(let str of strs){
            res += str;
        }        
        
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0){ return []; }

        const sizes = [];
        let res = [], i = 0;

        while(str[i] !== '#'){
            let sizeStr = '';
            while(str[i] !== ','){
                sizeStr += str[i];
                i++;
            }
            sizes.push(parseInt(sizeStr));
            i++
        }
        i++;

        for(let size of sizes){
            res.push(str.slice(i, size + i));
            i += size;
        }

        return res;
    }
}
