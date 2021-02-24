import Node from '../node/index.js'

class Graph {
    /**
     * Constructor for Graph class
     */
    constructor() {
        this._vertices = []
    }

    /**
     * Return the number of vertices
     */
    size() {
        return this._vertices.length
    }

    /**
     * Add a node to the graph
     * @param {Object} data about the node
     */
    add(data = {}) {
        this._vertices.push(new Node(data, this.size()))
    }

    /**
     * Return true if the index is in range
     * @param {Number} i 
     */
    isIn(i) {
        return i >= 0 && i < this._vertices.length
    }

    /**
     * Return the i-th vertex
     * @param {Number} i index
     * @return {Node}
     */
    get(i) {
        if (!this.isIn(i)) {
            throw new Error(`Index out of bounds`)
        }
        
        return this._vertices[i]
    }

    /**
     * Connect the i-th and the j-th vertices together
     * @param {Number} i 
     * @param {Number} j 
     */
    connect(i, j) {
        if (!this.isIn(i) || !this.isIn(j)) {
            throw new Error(`Index out of bounds`)
        }

        let nodeI = this.get(i)
        let nodeJ = this.get(j)

        this.get(i).connect(nodeJ)
        this.get(j).connect(nodeI)
    }

    /**
     * Set the property of the 
     * @param {Number} i
     * @param {String} property 
     * @param {*} value 
     */
    set(i, property, value) {
        if (!this.isIn(i)) {
            throw new Error(`Index out of bounds`)
        }

        this.get(i).set(property, value)
    }
    
    /**
     * Return true if there is an edge between i and j
     * @param {Number} i 
     * @param {Number} j 
     */
    exists(i, j) {
        if (!this.isIn(i) || !this.isIn(j)) {
            throw new Error(`Index out of bounds`)
        }

        return this.get(i).adjacentList().includes(j)
    }

    /**
     * 
     */
    vertices() {
        return this._vertices
    }
}

export default Graph