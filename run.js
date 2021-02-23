// require('app-module-path').addPath(process.cwd())
import { addPath } from 'app-module-path'
addPath(__dirname)

import * as DS from './data-structures'

let g = new DS.Graph()