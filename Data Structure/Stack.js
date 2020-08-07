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
        let node = new Node(value, this.top, null);
        if (this.top)
        {
            this.top.next = node;
        }
        this.top = node;
        this.length++;
        return this;
    }

    pop()
    {
        if (this.length == 0)
        {
            return undefined;
        }
        else
        {
            let value = this.top.value;
            this.top = this.top.prev;
            this.top.next = null;
            this.length--;
            return value;
        }
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