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
     */
    constructor(value)
    {
        this.value = value;
        this.left = this.rigth = null;
    }
}