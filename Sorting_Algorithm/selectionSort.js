   
//time complexity is O (N ^ 2)
const swap=(arr,i,j)=>{
    let temp = arr[i]  // storing the snapshot
    // swapping 
    arr[i] = arr[j]
    arr[j] = temp
}

const selectionSort=arr=>{
    for (let i =0 ; i < arr.length; i++) {
        let swapIdx = i;

        for (let j = i+1 ; i < arr.length; j++) {
            if (arr[j] < arr[swapIdx]) {
                swapIdx =j
            }
        }
        swap(arr,i,swapIdx)
    }
    return arr
}

console.log(selectionSort([4,2,5,1,3]));