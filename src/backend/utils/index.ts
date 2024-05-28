/**
 * 是否在deploy中运行代码
 */
export function runInDenoDeploy() {
    const deploymentId = Deno.env.get("DENO_DEPLOYMENT_ID");
    return !!deploymentId;
}

function stringify(data: unknown) {
    return JSON.stringify(data);
}

export function typeOf(data: unknown) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

export function jsonResponse(data: unknown, status = 200) {
    return new Response(
        stringify(data),
        {
            status: status,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:63341",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Expose-Headers": "obs-status",
                "Access-Control-Allow-Headers": "content-type",
                "obs-status": "active",
            },
        },
    );
}

export async function readReqBody(req: Request): Promise<string> {
    const body = await req.blob()
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.onload = () => {
            resolve(reader.result as string)
        }
        reader.readAsText(body)
    })
}
