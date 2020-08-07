class Queue


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
        let node = new Node(value, null, null);
        if (this.length == 0)
        {
            this.first = node;
        }
        else
        {
            this.last.next = node;
            node.prev = this.last;
        }
        this.last = node;
        this.length++;
        return this;
    }

    dequeue()
    {
        if (this.length == 0)
        {
            return undefined;
        }
        else
        {
            let value = this.first.value;
            let node = this.first.next;
            if (node)
            {
                node.prev = null;
            }
            this.first = node;
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



// Test
let q = new Queue();
q.dequeue();