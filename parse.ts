import {parseMarkdown} from "./src/backend/parser/index.ts";

const cache: Record<string, any> = {}

function iterateDir(dir: string, cache: Record<string, any>) {
    const items = Deno.readDirSync(dir)
    for (const item of items) {
        const name = `${dir}/${item.name}`
        if (item.isFile) {
            const key = name.replace(/^vault\//, '')
            if (name.endsWith('.md')) {
                cache[key] = parseMarkdown(Deno.readTextFileSync(name))
            } else {
                cache[key] = null
            }
        } else if (item.isDirectory) {
            iterateDir(name, cache)
        }
    }
}

iterateDir('vault', cache)

const cacheFileContent = `export default ${JSON.stringify(cache)}`
Deno.writeTextFileSync('src/backend/cache.ts', cacheFileContent)

const msg = `
✅  cache 数据已生成，现在可以提交发布啦！🎉🎉🎉 

可运行以下命令在本地预览：
    $ deno task dev
或
    $ yarn dev
`
console.log(msg)
