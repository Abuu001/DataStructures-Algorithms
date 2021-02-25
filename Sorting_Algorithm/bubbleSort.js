
/**
 * time complexity is O(N ^ 2)  -- > Quadratic time complexity
 */

// a swap helper func that  we will use in both BS and SS
const swap=(arr,i,j)=>{

    let temp = arr[i]  // storing the snapshot
    // swapping 
    arr[i] = arr[j]
    arr[j] = temp
}

const bubbleSort = arr =>{

    for (let i =0 ; i < arr.length ; i++) {

        for (let j =0 ; j < arr.length- i ; j++) {
            if ( arr[j] > arr[j + 1]) {
                swap(arr ,j , j+1)
            }
        }
    }

    return arr ;
}

console.log(bubbleSort([4,2,5,1,3]));   // [1,2,3,4,5]