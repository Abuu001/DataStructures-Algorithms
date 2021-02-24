/**
 *   func tht returns the non fo vowels within a string 
 *   vowels ==> '"a","e","i","o","u"
 * 
 * eg
 *  vowels('what) --->1
 *   vowels('why?') --->0
 *   vowels('aEIoU') --> 5
 */
//  time  complexity  is O(N)
// space complexity O(N)

 const vowel1= str =>{
     str = str.toLowerCase()
    const vowels ='aeiou'.split('')
    let count =0;

    for (let i= 0 ; i < str.length ; i++) {
        const char = str[i];
 
        for (let j= 0 ; j < vowels.length ; j++) {
            const vowel = vowels[j]
      
            if (char === vowel) {
                count ++
            }
        }

    }
    return count
}

console.log(vowel1('what') );  //1
console.log(vowel1('why?')); //0
console.log(vowel1('aEIoU'));  // 5
console.log(vowel1('aaaabbbbbuuuuu'));  //9


console.log("===================");
 // ===========================================================
const vowels = str =>{
    const arrOfLetters = str.toLowerCase().split('');

    const vowels = ['a','e','i','o','u'] 
    let count =0 

    for (let i= 0 ; i <=vowels.length ; i++) {
        const char = vowels[i]
  
        const hasVowels=arrOfLetters.includes(char)
       
        if (hasVowels){
            count +=1
        }
    } 

    return count;
}

console.log(vowels('what') );
console.log(vowels('why?'));
console.log(vowels('aEIoU'));
