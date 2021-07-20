import { serve } from "https://deno.land/std@0.101.0/http/server.ts"

const PORT = Number(Deno.env.get('SELF_ASSIGNED_PORT'))
const server = serve({ port: PORT });
console.log(`HTTP webserver running.  Access it at:  http://localhost:${PORT}/`);

for await (const request of server) {
  let bodyContent = "Your user-agent is:\n\n";
  bodyContent += request.headers.get("user-agent") || "Unknown";

  request.respond({ status: 200, body: bodyContent });
}