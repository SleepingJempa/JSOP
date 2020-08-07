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
        let value;

        if (index == 0)
        {
            value = this.head.value;
            let node = this.head.next;
            this.head = node;
        }
        else
        {
            let node = this.head;

            while(--index)
            {
                node = node.next;
            }

            value = node.next.value;
            let temp = node.next.next;
            node.next = temp;
        }
        
        return value;
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
ll.append(2).append(3).append(1).append(4);
// It's working well, but js shorten the printed strings; So don't worry about the output.

console.log(ll);