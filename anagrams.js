/**
 * checks if 2 string are anagrams of each other
 * one string is an anagram of another if it uses exact same character
 * 
 * eg
 * anagrams('heart', 'earth')  -->True
 *  anagrams('heart', '       earth')  -->True
 *  anagrams('Heart', 'EARTH')  -->True
 *  anagrams('lol', 'loic')  -->False
 * 
 * method 2:
 * NB words in anagram can be the same if they are arranged alphabetically
 */

const anagrams = (str1 , str2)=> {
    str1 = str1.toLowerCase().replace(/[\W_]+/g,"");
    str2 = str2.toLowerCase().replace(/[\W_]+/g,"")

    if (str1.length  !== str2.length) {
        return false;
    }

    const str1CharCount = {};
    for (let i=0; i<str1.length ; i++) {
        const aChar = str1[i]
        str1CharCount[aChar] = str1CharCount[aChar] + 1 || 1;
    }
 
    for (let i=0; i<str2.length ; i++) {
        const bChar = str2[i]
        if ( !str1CharCount[bChar]){
            return false
        }else{
            str1CharCount[bChar]-- ;
        }
    }
    return true ;
}

console.log(anagrams('heart', 'earth'));   // true
console.log(anagrams('Heart', 'EARTH'));   // true
console.log(anagrams('egg', 'Geg'));   // true
