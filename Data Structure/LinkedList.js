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

    get length()
    {
        return this._length;
    }

    append(value)
    {
        let node = new Node(value, null);
        if (this.length == 0)
        {
            this._head = node;
        }
        else
        {
            this._tail._next = node;
        }
        this._tail = node;
        this._length++;
        return this;
    }

    prepend(value)
    {
        let node = new Node(value, head);
        if (this.length == 0)
        {
            this._tail = node;
        }
        else
        {
            node._next = this.head;
        }
        this._head = node;
        this._length++;
        return this;
    }

    remove(index)
    {
        if (index == 0)
        {
            let node = this.head.next;
            delete this._head;
            this._head = node;
        }
        else
        {
            let node = this.head;
            while(--index)
            {
                node = node.next;
            }
            let temp = node.next.next;
            delete node._next;
            node._next = temp;
        }
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



// Test
let ll = new LinkedList();
ll.append(2);
ll.append(3);
ll.append(1);
console.log(ll);