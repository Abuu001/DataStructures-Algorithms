/**
 * write a func tht accepts a +ve N.
 * should log a pyramid shape\
 * with N levels should use the # character
 *  pyramid should have spaces both left and right
 * 
 * eg
 * 
 * pyramid(1)
 *         '#'
 *   pyramid(2)
 *         ' # '
 *         '###'
 * 
 * pyramid(3)
 *          '  #  '
 *          ' ### '
 *          '####'
 */

 // time complexity of the solution is   O(N ^ 2)

 const pyramid = n =>{
    for (let i=1 ; i <=n ; i++) {
        const padding =" ".repeat(n-1)
        const hashes = "#".repeat(i *2 -1 )
        console.log(padding + hashes + padding);
    }
}
console.log(pyramid(3));
console.log(pyramid(2));
console.log(pyramid(4));