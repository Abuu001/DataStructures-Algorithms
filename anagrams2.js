/**
 * NB words in anagram can be the same if they are arranged alphabetically
 */

const anagrams2 = (str1 , str2)=> {
    str1 = str1.toLowerCase().replace(/[\W_]+/g,"");
    str2 = str2.toLowerCase().replace(/[\W_]+/g,"")

    const  string1Sorted = str1.split('').sort().join('')
    const  string2Sorted = str2.split('').sort().join('')

    return  string1Sorted ===  string2Sorted;
}

console.log(anagrams2('heart', 'earth'));   // true
console.log(anagrams2('Heart', 'EARTH'));   // true
console.log(anagrams2('egg', 'Geg'));   // true
