/**
 *   reverse an integer
 *  eg
 *  reversedInt(13) === 31
 * reversedInt(404)  ===  404
 * reversedInt(100)   === 1
 * reversedInt(-13)   ===  -31
 * reversedInt(-100)  === -1
 */

const reversedInt = num =>{
   let reversed =num.toString().split('').reverse().join('');
    let res =  parseInt(reversed);

    if (num < 0) {
        return  res *  -1;
    }
   return res
}

console.log(reversedInt(31));  //13
console.log(reversedInt(404));  //404
console.log(reversedInt(100));  //1
console.log(reversedInt(-31));  //-13
