// Implementing stacks in a linked list



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