class HashTable


{
    /**
     * 
     * @param {number} size 
     */
    constructor(size)
    {
        this._size = size;
        this._data = new Array(size);
    }

    get size()
    {
        return this._size;
    }

    get data()
    {
        return this._data;
    }

    /**
     * 
     * @param {string} key 
     */
    hash(key)
    {
        let value = 0;

        // Simplest hash function
        for (let i = 0; i < key.length; i++) {
            value += (key.charCodeAt(i) * i) % this.size;
        }

        return value;
    }
        
    /**
     * 
     * @param {string} key
     * @param {*} value 
     */
    set(key, value)
    {
        let index = this.hash(key);
        if (!this.data[index]) {
            this.data[index] = [];
        }
        this.data[index].push([key, value]);
        return this.data;
    }

    /**
     * 
     * @param {string} key 
     */
    get(key)
    {
        let index = this.hash(key);
        let bucket = this.data[index];
        if (bucket)
        {
            for (let i = 0; i < bucket.length; i++)
            {
                if (bucket[i][0] === key)
                {
                    return bucket[i][1];
                }
            } 
        }
        else
        {
            return undefined;
        }
    }
}

let ht = new HashTable(2);
ht.set('c', 'C');
ht.set('a', 'A');
console.log(ht.data);
console.log(ht.get('a'));