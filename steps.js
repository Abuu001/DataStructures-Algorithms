/**
 *  write a func tht logs with N levels using the # character
 *  be sure each step has some no of empty space to the right 
 *  eg
 *  steps(2) 
 *   '# '
 *   '##'
 *   steps (3) 
 *     '#  '
 *    '## '
 *     '###'
 */

 // time complexity for this solution is  O(N ^ 2) 
 const steps = n =>{

    for (let i=1; i<=n ; i ++) {
        let step ="";

        for (let hash=i; hash>0 ; hash--) {
            step +='#';
        }

        for (let space= n - i; space>0 ; space--) {
            step +=' ';
        }
        console.log(step);
    }
}

console.log(steps(2));
console.log(steps(4));
console.log(steps(5));
