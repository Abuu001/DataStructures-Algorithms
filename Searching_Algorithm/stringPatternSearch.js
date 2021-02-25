/**
 * write a func tht shows no of times the patterrn occurs in the text
 *  stringPatternSearch('lollipop', 'lol')  ---> 1
 *   stringPatternSearch('lolol', 'lol') ---> 2
 */

 //  time complexity is O (M * N )
 // space complexity O(! )
const stringPatternSearch= (text,pattern) =>{
    let count =0;
 
    for ( let i=0; i < text.length ; i++ ) {
 
        for (let j =0 ; j < pattern.length ; j++) {
            const patternChar = pattern[j];
   
            if ( patternChar !== text[i + j]) {
               break;
            }

            if ( j === pattern.length - 1){
                count ++
            }
        }
    }
    return count;
}

console.log(stringPatternSearch('lolol', 'lol'));  //2
console.log(stringPatternSearch('lollipop', 'lol'));  //1
console.log(stringPatternSearch('popopo', 'po')); 