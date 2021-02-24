
 // time complexity for this solution is  O(N ^ 2) 
const steps = n=>{
    for (let i=1; i<=n ; i ++) {
        let step ="";
        step += "#".repeat(i)
        step += " ".repeat(n- i)
        console.log(step);
    }

}

console.log(steps(2));
console.log(steps(4));
console.log(steps(5));
 