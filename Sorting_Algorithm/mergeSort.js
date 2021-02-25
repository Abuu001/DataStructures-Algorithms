/**
 * create a func that when given 2 sorted arrays , returns
 *  a new array containig both elements sorted
 * 
 * eg
 * merge([1,3],[2,4])  === [1,2,3,4]
 * merge([1,5],[4,6,7]) === [1,4,5,6,7]
 * merge([4,6,7],[1,5])  === [ 1,4,5,6,7]
 */

 // time complexity is O (N + M)
const merge=(sortedArr1,sortedArr2)=>{
    let p1 =0;
   let p2 =0;
   let res =[]

   while(p1 < sortedArr1.length && p2 < sortedArr2.length) {
       if (sortedArr1[p1] < sortedArr2[p2] ){
           res.push(sortedArr1[p1])
           p1++
       }else{
        res.push(sortedArr2[p2])
        p2++
       }
   }

   while (p1 < sortedArr1.length){
        res.push(sortedArr1[p1])
        p1++;
   }

   while (p2 < sortedArr2.length){
        res.push(sortedArr2[p2])
        p2++;
   }

   return res;
}

console.log(merge([1,3],[2,4]));  // [ 1, 2, 3, 4 ]
console.log(merge([1,5],[4,6,7]));  //[ 1, 4, 5, 6, 7 ]
console.log(merge([4,6,7],[1,5]) );  // [ 1, 4, 5, 6, 7 ]
 