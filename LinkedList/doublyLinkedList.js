
/**
 * DOUBLY LINKED LIST
 *   doubly linked list ---> each node has 2  pointers one to the nxt node and the other to the prev node
 */

class Node {
    constructor(value,next,prev){
        this.value = value;
        this.next =next  || null;
        this.prev =prev  || null;
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    //adds  to end of list /tail
    append(value){
        // if list is empty 
        if (!this.tail){
            this.head = this.tail = new Node(value)
        }else{
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }
    //add to beginning of list /head
    prepend(value){

        //if list is empty
        if (!this.head){
            this.head = this.tail = new Node(value)
        }else{
            let oldHead =  this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next =oldHead
        }
    }
    deleteHead(){
        // if list is empty
        if (!this.head) {
            return null
        }else{
            let removedHead = this.head
            // if one node left in the list
            if(this.head === this.tail) {
                this.head = this.tail = null
            }else{
                this.head = this.head.next;
                this.head.prev = null
            }
            return removedHead.value
        }

    }
    deleteTail(){
          // if list is empty 
          if (!this.tail) {
            return null
        }else{
            let removedTail = this.tail
            // if one node left in the list
            if(this.head === this.tail) {
                this.head = this.tail = null
            }else{
                this.tail = this.tail.prev;
                this.tail.next = null
            }
            return removedTail.value
        }

    }
    search(value){
        let currentNode =this.head

        while(currentNode){
            if (currentNode.value ===value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }


}

let list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.prepend(-1)

console.log(list);
//console.log(list.search(-1));