/**
 *                      Implementing linear search
 *  const food = ["pizza","orange","youghurt"]
 *   linearSearchIndexOf(foods,"pizza")  ---> 0
 *    linearSearchIncludes(foods,"pizza")  ----> true
 *    linearSearchFind(foods , food => food === "pizza")   -----> "pizza"
 */

 // time complexity is O(N)  ---> linear

const food = ["pizza","orange","youghurt"] 

const linearSearchIndexOf = (arr,val)=>{
    for (let i =0 ; i < arr.length ; i++) {
        if (arr[i] === val){
            return  console.log(i)
        }
    }
    return  console.log(-1)
}

const linearSearchIncludes = (arr,val)=>{
    for (let i =0 ; i < arr.length ; i++) {
        if (arr[i] === val){
          return  console.log(true);
        } 
    }
       return console.log(false); 
}

const linearSearchFind = (arr,val)=>{
    // for (let i =0 ; i < arr.length ; i++) {
    //     if (cb(arr[i]) === true){
    //       return  console.log(arr[i]);
    //     } 
    // }
    //    return console.log(undefined);  

    // OR
    const item =  arr.find(food=> food=== val )
    return  console.log(item);
}

linearSearchIndexOf(food,"orange")  // 1
linearSearchIncludes(food,"pizza")   // true
linearSearchFind(food,"pizza") //
