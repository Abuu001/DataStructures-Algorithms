/**
 *   substitute each character by shifting it up
 * the alphabet by the given integer
 * should wrap around back to the beginning of the alphabet
 * 
 *  eg 
 * caesarCipher("a,b,c,d",1) === "bcde"
 * caesarCipher("yz",1)  === "za"
 * caesarCipher("a,b,c,d",100)  === "wxyz"
 * caesarCipher("gurer ner 9 qbtf!",13)  === "there are 9 dogs!"
 */

 // the time complexity of this solution is O(N) ==> we must visit all char in input string

const caesarCipher =(str,shift)=>{
    const alphabetArr ="abcdefghijklmnopqrstuvwxyz".split('');
    let res = "";

    for (let i=0; i<=str.length ; i ++) {
        const char =str[i];
        const idx = alphabetArr.indexOf(char)
        const encodedIdx  = (idx + shift) % 26 ; // trying to get numbers within 0 - 26
     
        if (idx === -1){
            res +=char;
            continue ;
        }

        res +=  alphabetArr[encodedIdx]
    }
    return res;
}
 
console.log(caesarCipher("a,b,c,d",1));  // ==> "bcde"
console.log(caesarCipher("yz",1) );  // ==> "za"
console.log(caesarCipher("a,b,c,d",100) );  // ==>  "wxyz"