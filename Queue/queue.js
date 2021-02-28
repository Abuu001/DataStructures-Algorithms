/**
 *  enqueue ---> O(N) linear time
 *    dequeue  ----> O(1)  constant time 
 */

class Queue {
    constructor(){
        this.data=[]
    }
    enqueue(val){
        this.data.push(val)
    }
    dequeue(){
        return this.data.shift()
    }
    peek(){
       return this.data[0]
    }
    size(){
      return  this.data.length
    }
    print(){
       console.log( this.data.join(' ---> '));
    }
}

let  v5 = new Queue()
v5.enqueue("Node 1");
v5.enqueue("Node 2");
v5.enqueue("Node 3");
v5.enqueue("Node 4");
v5.enqueue("Node 5")

console.log(v5.peek());  // Node 1
console.log(v5.print());   //Node 1 ---> Node 2 ---> Node 3 ---> Node 4 ---> Node 5