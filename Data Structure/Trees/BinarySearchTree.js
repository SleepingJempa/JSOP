class BinarySearchTree


{
    constructor()
    {
        
    }

    /**
     * 
     * @param {*} value 
     */
    insert(value)
    {
        let node = new Node(value);

        if (this.root == null)
        {
            this.root = node;
        }
        else
        {
            let trav = this.root;

            while(true)
            {
                
            }
        }
    }

    lookup()
    {

    }
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