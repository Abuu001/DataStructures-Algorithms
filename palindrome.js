/**
 * eg
 *   palindrome ("Madam") === true
 *   palindrome ("love") === false
 */

const palindrome = str =>{
    str = str.toLowerCase();

    const reversed =  str.split('').reverse().join('');
    if (str === reversed) {
        return true
    }else{
        return false;
    }
}

console.log(palindrome('Madam'));  //  returns true =>  Madam === madam
console.log(palindrome('hello'));    //  returns false =>  love !== evol