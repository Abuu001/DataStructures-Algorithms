/**
 * write a func tht splits an array (1 st args)
 * into groups the length of size of (2 nd arg) 
 * and returns them as a two dimentional array
 *  eg
 * chunck(["a","b","c","d"],2) ---> [["a","b"],["c","d"]]
 * chunck([0,1,2,3,4,5],4) ---> [[0,1,2,3],[4,5]]
 */

const chunck = (arr,size)=>{
    let res =[];

    for  (let i =0; i < arr.length ; i++) {
        const item = arr[i];
        const last = res[res.length -1]
 
        if (! last || last.length === size) {
            res.push([item])
        }else{
            last.push(item)
        }
    }

  return res;
}

console.log(chunck(["a","b","c","d"],2));  // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(chunck([0,1,2,3,4,5],4));  //  [ [ 0, 1, 2, 3 ], [ 4, 5 ] ]
console.log(chunck([0,1,2,3,4,5,6,7],5)); // [ [ 0, 1, 2, 3, 4 ], [ 5, 6, 7 ] ]
