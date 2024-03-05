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

export function jsonResponse(data: unknown) {
    return new Response(
        stringify(data),
        {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
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
