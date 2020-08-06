class MergeSort


{
    /**
     * 
     * @param {Array} list 
     * @param {function} compare 
     */
    constructor(list, compare = (a, b) => {return a < b;})
    {
        this._list = sort(list);
        this._compare = compare;
    }

    get list()
    {
        return this._list;
    }

}