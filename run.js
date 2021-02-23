// require('app-module-path').addPath(process.cwd())
import { addPath } from 'app-module-path'
addPath(process.cwd())

import * as DS from './data-structures/index.js'

let g = new DS.Graph()

let n = 10
for(let i = 0; i < n; i++) {
    g.add()
}

g.connect(0, 5)
g.connect(5, 3)
g.connect(3, 7)
g.connect(6, 9)

g.