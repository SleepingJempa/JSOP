class LinkedList


{
    constructor()
    {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    constructor(head_value)
    {
        this._head = new Node(head_value, null);
        this._tail = this._head;
        this._length = 1;
    }
}




class Node


{

}