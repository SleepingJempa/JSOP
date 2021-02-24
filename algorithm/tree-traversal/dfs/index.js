import Graph from '../../../data-structures/graph/index.js'
import Node from '../../../data-structures/node/index.js'
import TreeTraversal from '../index.js'

class DFS extends TreeTraversal {
    /**
     * 
     * @param {Function} action
     */
    constructor(action, flag = 'dfs-flag') {
        super(action, flag)
    }

    /**
     * 
     * @param {Node} node 
     */
    run(node) {
        node.set(this.flag, true)
        this.action(node)

        node.adj().forEach(adj => {
            if (!adj.get(this.flag)) {
                this.run(adj)
            }
        })
    }
}

export default DFS

