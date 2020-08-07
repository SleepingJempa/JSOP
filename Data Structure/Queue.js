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
            this.last = node;
        }
        else
        {
            this.first.prev = node;
            node.next = this.first;
        }
        this.first = node;
        this.length++;
        return this;
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



// Test
let q = new Queue();
q.enqueue(2);
q.enqueue(3);
console.log(q);