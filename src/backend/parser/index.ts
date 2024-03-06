import {parseHeadings} from "./headings.ts";
import {parseLinks} from "./links.ts";
import {parseEmbeds} from "./embeds.ts";
import {parseFrontMatter} from "./front-matter.ts";

export function parseMarkdown(source: string) {
    const cache: any = {}
    cache.headings = parseHeadings(source)
    cache.links = parseLinks(source)
    cache.embeds = parseEmbeds(source)
    cache.frontmatter = parseFrontMatter(source)

    return cache
}
