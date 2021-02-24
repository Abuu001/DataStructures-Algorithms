/**
 * write a program tht logs the numbers
 * from 1 to n . But for multiples of three prints  "fizz"
 * instead of the number and for multiples of five print "buzz"
 *  for numbers of both multiples of three and five print "fizzbuzz"
 * 
 *  eg
 *  fizzBuzz(5);
 *  //1
 * //2
 * // fizz
 * //4
 *  //buzz 
 *  .......
 *  15 => "fizzbuzz"
 */

const fizzBuzz = n =>{

    for (let i =1 ; i<=n ; i++) {
     
        if (i % 5 === 0  && i % 3 === 0) {
            console.log("fizzBuzz");
        }else if (i % 5 === 0) {
            console.log("Buzz");
        }else    if (i % 3 === 0) {
            console.log("fizz");
        }else{
            console.log(i);
        }
    }

}

console.log(fizzBuzz(15));