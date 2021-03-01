/**
 * linked lists are good for insertion and deletion
 * singly linked list  --> each node has only one next pointer to the list
 *  doubly linked list ---> each node has 2  pointers one to the nxt node and the other to the prev node
 */
class Node {
    constructor(data,next) {
        this.data = data;
        this.next =next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length =0;
    }
    //to add data at the beginning
    unshift(data){
        const newHead = new Node(data,this.head);
        this.length ++
        this.head = newHead
    }
    // to remove data at the beginning
    shift(){
        if (!this.head) {
            return;
        }

        const oldHead =this.head;
        this.head = this.head.next;
        this.length-- ;

        return oldHead
    }
    //get first data
    getFirst(){
        return this.head;
    }
    // to remove data from the end 
    pop() {
        const last = this.getLast()
        let current = this.head;

        // if the list has nothing return nothing
        if(!this.head){
            return;
        }

        // if the list has only one item remove it from the start
        if (this.length === 1){
            return this.shift()
        }

        while (current.next !== last){
          current = current.next
        }

        current.next = null;
        this.length-- ;

        return last
    }
    //add data to the end 
    push(data){

        if (!this.head) {
            return this.unshift(data)
        }
 
        const last = this.getLast()
        const newData = new Node(data,null)

        if (last){
            last.next = newData
            this.length++ ;
        }
 
        this.head.next= newData
        return last
    }
    // reverse a linked list 
    reverse(){
        let curr = this.head 
        let next = null
        let prev = null

        while(curr !== null) {
           next = curr.next
           curr.next =prev
           prev = curr
           curr = next
        }
 
        return prev
    }
    getLast(){

        let currentNode = this.head;
        while (currentNode && currentNode.next) {
            currentNode =currentNode.next;
        }
      return currentNode;
    }
    // remove a data  at a specific index
    remove(index){
        if (!this.getIndex(index)) {
            return false;
        }
      
        if (index === 0) {
            return this.shift();
        }

        const prevNode = this.getIndex(index -1)
        const nodeToRemove = this.getIndex(index)

        prevNode.next = prevNode.next.next;
        this.length-- ;
        return nodeToRemove
    }
    // insert data at specified position 
    insert(index,data){
        if (index > this.length ||  index < 0) {
            return false
        }
        if (index === 0) {
            this.unshift(data)
            return true;
        }
        const prevNode = this.getIndex(index -1)
        const nextNode = this.getIndex(index)

       prevNode.next = new Node(data,nextNode)
       this.length++ ;
       return true; 
    }
    getIndex(index){

        if (index >=this.length || index < 0 ) {
            return null
        }

        let counter =0 
        let curr = this.head

        while ( counter < index){
            curr = curr.next
            counter ++
        }
        
        return curr
    }
    // set data
    set(index,data){

        if (index > this.length  ||  !this.getIndex(index)){
            return false 
        }
   
        const node = this.getIndex(index) 
        node.data =data
        return true
    }
    clear(){
        this.head = null;
        this.length =0
    }
}

const t5 = new LinkedList();
t5.unshift(55)
t5.unshift(77)
t5.unshift(33)

// t5.reverse()
// t5.unshift(22)
// t5.unshift(89)
// t5.push(9)

console.log(t5);
console.log(t5.reverse());
//console.log("is last " ,t5.getLast());
//console.log(t5.getIndex(0));
// console.log(t5.set(0,11));
//console.log("is last " ,t5.getLast());