 /**
  * implement a binary search algorithm that searches a sorted array
  * the algorithm will return  the index of the value found
  *  
  * only works on sorted array 
  * Time complexity of  binary search is O (log n)  since we split search area by two for every next iteration
  */

const binarySearch=(sortedArray , value)=>{

    let startVal =0;
    let lastVal = sortedArray.length -1;

    while (startVal <= lastVal) {
        const midIndex = Math.floor((startVal + lastVal) / 2)
        const midVal = sortedArray[midIndex];
    
        if (midVal === value){
            return midIndex
        } else  if (midVal < value) {
            startVal = midIndex + 1;
        } else {
            lastVal = midIndex -1 
        }
    }

    return -1
}

let arrTo100 =[];

for (let i = 1; i <=100 ; i++) {
    arrTo100.push(i)
}
 
console.log(binarySearch(arrTo100, 100));  //99
console.log(binarySearch(arrTo100, 50));   //49
console.log(binarySearch(arrTo100, 20));   //19