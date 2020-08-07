class LinkedList


{
    constructor()
    {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    get tail()
    {
        return this._tail;
    }

    get head()
    {
        return this._head;
    }

    append(value)
    {
        let node = new Node(value, null);
        this.tail.next = node;
        this.tail = node;
        this._length++;
    }

    prepend(value)
    {
        let node = new Node(value, head);
        this.head = node;
        this._length++;
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

    get value()
    {
        return this._value;
    }

    get next()
    {
        return this._next;
    }

    set value(value)
    {
        this._value = value;
    }

    set next(next)
    {
        this._next = next;
    }
}