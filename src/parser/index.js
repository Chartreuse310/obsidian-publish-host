import fs from 'node:fs/promises'
import {fromMarkdown} from 'mdast-util-from-markdown'

const tree = fromMarkdown('## Hello, *World*!')

console.log(tree)
