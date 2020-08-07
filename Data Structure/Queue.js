class Stack


{
    constructor()
    {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek()
    {
        return this.first;
    }

    /**
     * 
     * @param {*} value 
     */
    enqueue(value)
    {

    }

    dequeue()
    {

    }
}





class Node


{

    /**
     * 
     * @param {*} value 
     * @param {Node} next 
     * @param {Node} prev
     */
    constructor(value, prev, next)
    {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}