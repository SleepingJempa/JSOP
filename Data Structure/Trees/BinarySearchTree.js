class BinarySearchTree


{

}



class Node


{
    /**
     * 
     * @param {*} value 
     * @param {Node} parent 
     */
    constructor(value, parent)
    {
        this.value = value;
        this.parent = parent;
        this.left = this.rigth = null;
    }
}