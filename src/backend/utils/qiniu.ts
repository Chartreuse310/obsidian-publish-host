import qiniu from "npm:qiniu@7.11.0";
import qiniuJS from "npm:@cktech/qiniu-js"
import {dotenv} from "../deps.ts"
import {runInDenoDeploy} from "./index.ts"


if (!runInDenoDeploy()) {
    // 注入本地的环境变量
    const env = await dotenv.load()
    Deno.env.set('QINIU_AK', env["QINIU_AK"])
    Deno.env.set('QINIU_SK', env["QINIU_SK"])
}

const ak = Deno.env.get("QINIU_AK");
const sk = Deno.env.get("QINIU_SK");


const mac = new qiniu.auth.digest.Mac(ak, sk);

export function getToken(bucket = 'wereadx', filename: string) {
    const putPolicy = new qiniu.rs.PutPolicy({
        scope: `${bucket}:${filename}`,
        expires: 300,
    });
    return putPolicy.uploadToken(mac)
}

interface UploadOptions {
    filename: string
    content: string | Blob
    mimeType: string,
    bucket: string
}
const defaultUploadOptions: UploadOptions = {
    filename: '',
    content: '',
    bucket: 'wereadx',
    mimeType: 'application/json',
}
interface UploadResult {
    key: string
    hash: string
}

/**
 * 上传文件到七牛云
 * @param options
 */
export function upload(options: Partial<UploadOptions>): Promise<UploadResult> {
    const opts: UploadOptions = {
        ...defaultUploadOptions,
        ...options,
    }
    const token = getToken(opts.bucket, opts.filename)

    const config = new qiniu.conf.Config({
        useHttpsDomain: true,
        regionsProvider: new qiniu.httpc.StaticRegionsProvider([
            // Region ID 参考 https://developer.qiniu.com/kodo/1671/region-endpoint-fq
            qiniu.httpc.Region.fromRegionId('z0')
        ])
    })
    const formUploader = new qiniu.form_up.FormUploader(config)
    const putExtra = new qiniu.form_up.PutExtra()
    putExtra.mimeType = opts.mimeType

    console.log(opts.content)
    return new Promise((resolve, reject) => {
        formUploader.put(token, opts.filename, opts.content, putExtra, (err: Error | undefined, body: any, resp: Response) => {
            if (err) {
                reject(err)
            } else if (resp.status === 200) {
                resolve(body)
            } else {
                reject(new Error(body.error))
            }
        })
    })
}

/**
 * 上传文件到七牛云
 * 由前端的 qiniu-js 实现
 * @param options
 */
export function uploadFile(options: Partial<UploadOptions>): Promise<UploadResult> {
    const opts: UploadOptions = {
        ...defaultUploadOptions,
        ...options,
    }
    const token = getToken(opts.bucket, opts.filename)
    const file = new File([opts.content], opts.filename, {type: opts.mimeType})

    return new Promise((resolve, reject) => {
        const observable = qiniuJS.upload(file, opts.filename, token, {mimeType: opts.mimeType})
        observable.subscribe({
            error(err: Error) {
                reject(err)
            },
            complete(res: UploadResult) {
                resolve(res)
            }
        })
    })
}

const config = new qiniu.conf.Config();
const bucketManager = new qiniu.rs.BucketManager(mac, config);
const privateBucketDomain = 'http://wereadx.static.champ.design'

export function download(key: string) {
    // 1小时过期
    const deadline = (Date.now() / 1000 | 0) + 60;
    return bucketManager.privateDownloadUrl(privateBucketDomain, key, deadline)
}
