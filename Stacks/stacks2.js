// Stacks
//palindrome

//LIFO 

let letters =[]
let word = "racecar"
let reversedWord = ''

for (let i=0 ;i < word.length ; i++) {
    const char = word[i] 
    letters.push(char)
}

for ( let i=0;i<word.length;i++) {
    const char = letters.pop()
  reversedWord += char
}

if (word === reversedWord) {
    console.log(`${word} is a palindrome`);
}else{
    console.log(`${word} is NOT  a palindrome`);
}