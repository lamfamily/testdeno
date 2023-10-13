import { serve } from "https://deno.land/std@0.204.0/http/server.ts";

const handler = async (_request: Request): Promise<Response> => {
    const resp = await fetch("https://api.github.com/users/denoland", {
        headers: {
            accept: "application/json",
        },
    });

    return new Response(resp.body, {
        status: resp.status,
        headers: {
            "content-type": "application/json",
        },
    });
};

serve(handler);

// run with: deno run --allow-net test_http_server.ts