class Stack


{
    constructor()
    {
        this.top = null;
        this.length = 0;
    }

    peek()
    {
        return this.top;
    }

    push(value)
    {
        let node = new Node(value, null);
        this.top.next = node;
        this.top = node;
        this.length++;
        return this;
    }

    pop()
    {

    }
}





class Node


{

    /**
     * 
     * @param {*} value 
     * @param {Node} next 
     */
    constructor(value, next)
    {
        this.value = value;
        this.next = next;
    }
}