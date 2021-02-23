class Node {
    /**
     * Constructor for Node class
     * @param {Object} data what will be saved on this node
     * @param {Number} index the index of this node
     */
    constructor(data = {}, index) {
        this._data = data
        this._index = index
        this._adj = []
    }

    /**
     * Add the other node to the adjacency list
     * @param {Node} other
     */
    connect(other) {
        this._adj.push(other)
    }

    /**
     * Return the list of adjacent nodes
     */
    adjacentList() {
        return this._adj
    }

    /**
     * Return the index of this node in the vertices list
     */
    index() {
        return this._index
    }

    /**
     * Getter the data object
     * @param {String} property name of the property
     */
    get(property) {
        return this._data[property]
    }
    
    /**
     * Set the (new) value to the property (if exists)
     * @param {String} property 
     * @param {*} value
     */
    set(property, value) {
        this._data[property] = value
    }
}

export default Node