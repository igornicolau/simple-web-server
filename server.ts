import Router from "../simple-http-server/Router.ts";

const port = 8080;

const router = Router.initialize();

console.log(`HTTP server running. Access it at: http://localhost:8080/`);
Deno.serve({ port }, (request) => router.handle(request));
