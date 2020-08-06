class MergeSort


{
    /**
     * 
     * @param {Array} list 
     * @param {function} compare 
     */
    constructor(list, compare)
    {
        this._list = sort(list);
        initilize(compare);
    }

    initilize(compare)
    {
        if (typeof compare === 'function')
        {
            this._compare = compare;
        }
        else
        {
            this._compare = function ascending(a, b)
            {
                return a < b;
            }
        }
    }

    get list()
    {
        return this._list;
    }
    
    /**
     * 
     * @param {Array} list
     * @param {number} left_index 
     * @param {number} right_index 
     */
    sort(list)
    {
        if (list.length == 1)
        {
            return list;
        }
        else
        {
            return merge(   
                sort(list.slice(0, list.length / 2)),
                sort(list.slice(list.length / 2, this.length))    
                        );
        } 
    }

    /**
     * 
     * @param {Array} listA 
     * @param {Array} listB 
     */
    merge(listA, listB)
    {
        result = [];
        indexA = 0;
        indexB = 0;

        while (indexA < listA.length && indexB < listB.length)
        {
            if (this._compare(listA[indexA], listB[indexB]))
            {
                result.push(a);
                indexA++;
            }
            else
            {
                result.push(b);
                indexB++;
            }
        }

        while (indexA < listA.length)
        {
            result.push(a);
            indexA++;
        }

        while (indexB < listB.length)
        {
            result.push(b);
            indexB++;
        }
        return result;
    }

}