class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        /* Check rows, columns, squares for duplicates */
        // // check if rows have duplicates
        // for(let i = 0; i < 9; i++){
        //     let seen = new Set();
        //     for(let j = 0; j < 9; j++){
        //         if(board[i][j] === '.'){ continue; }
        //         if(seen.has(board[i][j])){ return false; }
        //         seen.add(board[i][j]);
        //     }
        // }

        // // check if cols have duplicates
        // for(let i = 0; i < 9; i++){
        //     let seen = new Set();
        //     for(let j = 0; j < 9; j++){
        //         if(board[j][i] === '.') { continue; }
        //         if(seen.has(board[j][i])){ return false; }
        //         seen.add(board[j][i]);
        //     }
        // }

        // // check if squares have duplicates
        // for(let square = 0; square < 9; square++){
        //     let seen = new Set();
        //     for(let i = 0; i < 3; i++){
        //         for(let j = 0; j < 3; j++){
        //             let r = Math.floor(square / 3) * 3 + i;
        //             let c = (square % 3) * 3 + j;
        //             if(board[r][c] === '.'){ continue; }
        //             if(seen.has(board[r][c])){ return false; }
        //             seen.add(board[r][c]);
        //         }
        //     }
        // }

        /* Hash Set - One Pass */
        const rows = new Map(), cols = new Map(), squares = new Map();
        for(let i  = 0; i < 9; i++){
            for(let j  = 0; j < 9; j++){
                if(board[i][j] === '.') continue;
                
                const squareKey = `${Math.floor(i/3)},${Math.floor(j/3)}`;

                if(
                    (rows.get(i) && rows.get(i).has(board[i][j]))
                    ||
                    (cols.get(j) && cols.get(j).has(board[i][j]))
                    ||
                    (squares.get(squareKey) && squares.get(squareKey).has(board[i][j]))
                ){
                    return false;
                }

                if(!rows.has(i)) rows.set(i, new Set());
                if(!cols.has(j)) cols.set(j, new Set());
                if(!squares.has(squareKey)) squares.set(squareKey, new Set());

                rows.get(i)?.add(board[i][j]);
                cols.get(j)?.add(board[i][j]);
                squares.get(squareKey)?.add(board[i][j]);
            }
        }
        
        return true;
    }
}
