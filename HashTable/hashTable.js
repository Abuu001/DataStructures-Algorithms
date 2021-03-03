const  hashStringToInt=(str,tableSize)=>{
    let hash =17;

    for (let i=0; i < str.length ; i++ ) {
        hash = (13 * hash * str.charCodeAt(i)) % tableSize
    }

    return  hash;
}
 
class HashTable{
    constructor(){
       this.table=  new Array(17)
       this.numItems=  0
    }
 
    setItem(key,value){
        this.numItems++
        const idx = hashStringToInt(key,this.table.length);
        if  (this.table[idx]) {
            this.table[idx].push([key,value])
        }else{
            this.table[idx] = [[key,value]]
        }
    }
    getItem=(key)=>{
        const idx = hashStringToInt(key,this.table.length); 
    
        if (!this.table[idx]) {
            return null;
        }
        //O(N)
        return this.table[idx].find(x => x[0]  ===key)[1]
    }
}

const  myTable = new HashTable()
myTable.setItem('firstName','bob')
myTable.setItem('lastName','lee')
myTable.setItem('age',21)
myTable.setItem('dob','1/2/2002')

console.log(myTable.getItem('firstName'));  //bob
console.log(myTable.getItem('lastName')); // lee
console.log(myTable.getItem('age'));  //21
console.log(myTable.numItems);    //4 
