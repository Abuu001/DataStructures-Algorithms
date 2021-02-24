/**
 *    return the character most commonly used
 * 
 * eg
 * 
 * maxChar ("I loveeeeeee  noooodles")  === 'e;
 * maxChar("1337") === '3'
 */

const maxChar =  str =>{
    let charCountObj ={}
    let maxChar =""
    let maxCount =0;
 
  for (let i =0; i<str.length ; i++) {
        const char = str[i];
        charCountObj[char] =charCountObj[char] +1 || 1

        if (charCountObj[char] > maxCount) {
            maxChar = char
            maxChar = charCountObj[char];
        } 
    }
 console.log(charCountObj);  //  { I: 1, ' ': 3, l: 2, o: 5, v: 1, e: 8, n: 1, d: 1, s: 1 }
    return maxChar;
}

 console.log(maxChar ("I loveeeeeee  noooodles") );