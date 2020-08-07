class MergeSort


{
    /**
     * 
     * @param {Array} list 
     */
    constructor(list)
    {
        this._list = this.sort(list);
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
            return this.merge(   
                this.sort(list.slice(0, list.length / 2)),
                this.sort(list.slice(list.length / 2, this.length))    
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
        let result = [];
        let indexA = 0;
        let indexB = 0;

        while (indexA < listA.length && indexB < listB.length)
        {
            if (listA[indexA] < listB[indexB])
            {
                result.push(listA[indexA]);
                indexA++;
            }
            else
            {
                result.push(listB[indexB]);
                indexB++;
            }
        }

        while (indexA < listA.length)
        {
            result.push(listA[indexA]);
            indexA++;
        }

        while (indexB < listB.length)
        {
            result.push(listB[indexB]);
            indexB++;
        }
        return result;
    }

}

let ms = new MergeSort([3,2,3,5,1]);
console.log(ms.list);