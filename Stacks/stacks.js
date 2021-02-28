/**
 * can be implemented on  array or linkedlist
 */

// Implementing stacks in an array

class Stack{
    constructor(){
        this.data =[]
    }
    push(val){
        this.data.push(val)
    }
    pop(){
        return this.data.pop()
    }

}