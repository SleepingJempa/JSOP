class LinkedList


{
    constructor()
    {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    append(value)
    {
        let node = new Node(value, undefined);
        if (this.length == 0)
        {
            this.head = node;
        }
        else
        {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value)
    {
        let node = new Node(value, this.head);
        if (this.length == 0)
        {
            this.tail = node;
        }
        this.head = node;
        this.length++;
        return this;
    }

    remove(index)
    {
        if (index == 0)
        {
            let node = this.head.next;
            delete this.head;
            this.head = node;
        }
        else
        {
            let node = this.head;
            while(--index)
            {
                node = node.next;
            }
            let temp = node.next.next;
            delete node.next;
            node.next = temp;
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
        this.value = value;
        this.next = next;
    }
}



// Test
let ll = new LinkedList();
ll.append(2);
ll.append(3);
ll.append(1);
ll.append(4);