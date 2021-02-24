/**
 * write a func that returns the provided string with 
 * the first letter of each word capitalized.
 * eg 
 * capitalize("I'm a little tea pot")  ---> 'I'm  A Little Tea Pot';
 *  capitalize("sHORT AnD sTout")
 */

const capitalize = str =>{
   const arrOfWords= str.split(' ')
   const arrOfWordsCased = [];

   for (let i=0 ; i< arrOfWords.length ; i++) {
       const word=arrOfWords[i]
       arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
   }
   return arrOfWordsCased.join(' ')
}

console.log(capitalize("I'm a little tea pot")); // ==> I'm A Little Tea Pot
console.log(capitalize("sHORT AnD sTout"));  // ==> Short And Stout
