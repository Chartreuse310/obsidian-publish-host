import {parseMarkdown} from "../src/backend/parser/index.ts";

const doc = Deno.readTextFileSync("resources/cache/Sample.md")
const result = parseMarkdown(doc)
console.log(result)
