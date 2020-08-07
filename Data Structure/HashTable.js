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
        this.data[index] = value;
    }
    
}