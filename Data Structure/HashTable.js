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
}