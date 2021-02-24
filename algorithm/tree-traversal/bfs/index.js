import Graph from '../../../data-structures/graph/index.js'
import Node from '../../../data-structures/node/index.js'
import TreeTraversal from '../index.js'

class BFS extends TreeTraversal {
    /**
     * 
     * @param {Function} action
     */
    constructor(action, flag = 'bfs-flag') {
        super(action, flag)
    }

    /**
     * 
     * @param {Node} node 
     */
    run(node) {
        node.set(this.flag, true)
        let bfsQueue = [node]

        while (bfsQueue.length > 0) {
            let tmp = bfsQueue.pop()
            this.action(tmp)
            tmp.adj().forEach(adj => {
                if (!adj.get(this.flag)) {
                    bfsQueue.push(adj)
                }
            })
        }
    }
}

export default BFS

