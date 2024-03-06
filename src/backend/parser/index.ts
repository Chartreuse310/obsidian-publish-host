import {mdast} from "../deps.ts"

interface Heading {
    heading: string
    level: number
    pos: [number, number, number, number, number, number]
}


export function parseHeadings(source: string) {
    const root = mdast.fromMarkdown(source)
    const headings: Heading[] = []
    const headingNodes = root.children.filter((node: any) => node.type === 'heading')
    headingNodes.forEach((node: any) => {
        const heading = source.slice(node.position.start.offset, node.position.end.offset)
        const {start, end} = node.position
        headings.push({
            heading: heading.replace(/^#+\s/, ''),
            level: node.depth,
            pos: [start.line - 1, start.column - 1, start.offset, end.line - 1, end.column - 1, end.offset],
        })
    })
    return headings
}

// const headings = parseHeadings(ast, markdownContent)
// console.log(headings)

// function parseLinks(source: string) {
//
// }
