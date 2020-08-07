class LinkedList


{
    constructor()
    {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    /**
     * 
     * @param {*} head_value 
     */
    constructor(head_value)
    {
        this._head = new Node(head_value, null);
        this._tail = this._head;
        this._length = 1;
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
        this._value = value;
        this._next = next;
    }
}