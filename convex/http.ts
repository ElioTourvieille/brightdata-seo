import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

const http = httpRouter();

export enum ApiPath {
    Webhook = "/api/webhook",
}

http.route({
    path: ApiPath.Webhook,
    method: "POST",
    handler: httpAction(async (ctx, req) => {
        const body = await req.bytes();
        return new Response(body, { status: 200 });
    }),
});

http.route({
    path: ApiPath.Webhook,
    method: "GET",
    handler: httpAction(async (ctx, req) => {
        const body = await req.bytes();
        return new Response(body, { status: 200 });
    }),
});

export default http;