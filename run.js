import * as DS from './data-structures/index.js'
import * as AL from './algorithm/index.js'

let g = new DS.Graph()

let n = 5
for(let i = 0; i < n; i++) {
    g.add()
}

console.log(g.size())

g.connect(0, 1)
g.connect(1, 3)
g.connect(2, 4)

let d = new AL.DFS((node) => console.log(node))
d.run(g.get(0))
d.run(g.get(2))

// g.vertices().forEach(vertex => console.log(vertex))