import * as url from 'url'
import fs from 'node:fs/promises'
import path from 'node:path'
import {fromMarkdown} from 'mdast-util-from-markdown'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// const markdownContent = `## Hello, *World*!`
// const ast = fromMarkdown(markdownContent)
//
// await fs.writeFile(path.resolve(__dirname, 'ast.json'), JSON.stringify(ast, null, '  '))

const files = await fs.readdir(path.resolve(__dirname, '../../../vault'), {})
for (const file of files) {
    console.log(file)
}
