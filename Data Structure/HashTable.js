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

    /**
     * 
     * @param {string} key 
     */
    hash(key)
    {
        value = 0;

        // Simplest hash function
        for (let i = 0; i < key.length; i++) {
            value += (key.charCodeAt(i) * i) % this.size;
        }

        return value;
    }
}