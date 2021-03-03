/**
 * Binary search trees are fast for insertions and deletions
 * 
 * Difference btwn breadth-first-search and depth-first-search is 
 *   that dfs  looks for values branch by branch 
 *    bfs  looks for level by level
 */

class Node{
    constructor(value){
        this.value = value;
        this.left =null;
        this.right =null;
    }
}

class BinarySearchTree{
    constructor(value){
        this.root = new Node(value);
        this.count =1;
    }
    size(){
        return this.count;
    }                 
    insert(value) {
        this.count++;

        let newNode = new Node(value)
        if (this.root === null){
            this.root = new Node(value)
            return ;
        }
        // recursive function
        const searchTree = node =>{

            // if value < node.value , go left
           if  (value < node.value) {
              // if no left child append value there
              if (!node.left){
                  node.left = newNode
              }
              //if  there is a left child call search tree again
              else{
                  searchTree(node.left)
              }
            }
            // if value > node.value , go right
            else if(value > node.value) {
                if (!node.right){
                    node.right = newNode
                }
                //if  there is a right child call search tree again
                else{
                    searchTree(node.right);
                }
            }
   
        }
       searchTree(this.root)
    }
    min (){ 
        let currentNode = this.root;

        while(currentNode.left){
            currentNode = currentNode.left
        }
        return currentNode.value;
    }
    max() {
        let currentNode = this.root;
        
        while(currentNode.right){
            currentNode = currentNode.right
        }
        return currentNode.value
    }
    contains(value){
        let currentNode = this.root;

        while ( currentNode){
            if ( value === currentNode.value) {
                return true
            }
    
            if ( value < currentNode.value){
                currentNode = currentNode.left
            }else{
                currentNode = currentNode.right
            }
        }
        return false
    }

//=============depth first search=============================================

//in-order   ---> left , root ,right
dfsInOrder(){
    let result =[]
    const traverse =node =>{

        // if left child exists go left again
        if(node.left)  traverse(node.left)
        //capture root node value
        result.push(node.value)

        // if right child exists go right again 
        if(node.right)  traverse(node.right)
       
    }
    traverse(this.root)

    return result
}

/**
 * pre order - traverses all root nodes (on left side)on the tree then left nodes  (on left side) then right nodes (on left side)
 *  then root nodes (on right side)on the tree then lrft nodes  (on right side) then right nodes (on right side)
 */
//pre - order  ---> root ,left , right
dfsPreOrder(){
    let result =[]
    const traverse =node =>{
        //capture root node value
        result.push(node.value)

        // if left child exists go left again
        if(node.left)  traverse(node.left)
 
        // if right child exists go right again 
        if(node.right)  traverse(node.right)
       
    }
    traverse(this.root)

    return result
   
}
/**
 * post order - traverses all left nodes (on left side)on the tree then right nodes  (on left side) then root nodes (on left side)
 *  then left nodes (on right side)on the tree then right nodes  (on right side) then root nodes (on right side)
 */
    //post - order   --> left,right ,root
dfsPostOrder(){
    let result =[]
    const traverse =node =>{
        
        // if left child exists go left again
        if(node.left)  traverse(node.left)
        
        // if right child exists go right again 
        if(node.right)  traverse(node.right)
        
        //capture root node value
        result.push(node.value)
    }

    traverse(this.root)

    return result

}
//===================================================================

//============================breadth first search====================================
    breadthFirstSearch(){
        let result =[]
        let queue =[]

        queue.push(this.root)
     
        while(queue.length){
            let  currentNode =queue.shift()
            result.push(currentNode.value)

            if ( currentNode.left){
                queue.push(currentNode.left)
            }

            if ( currentNode.right){
                queue.push(currentNode.right)
             }
        }

        return result
    }

//===============================================================
}

const bst = new  BinarySearchTree(15);
bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst);
console.log(bst.min());  //2
console.log(bst.max()); //39
console.log(bst.contains(3));  //  true
console.log(bst.dfsInOrder()); // [2,3,12,15,28,36,39]
console.log(bst.dfsPreOrder());// [15,3,2,12,36,28,39]
console.log(bst.dfsPostOrder());  // [2,12,3,28,39,36,15]
console.log(bst.breadthFirstSearch()); // [15,3,36,2,12,28,39]
