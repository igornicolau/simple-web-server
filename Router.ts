import Routes from "./routes/Routes.ts";

export default class Router {
  private routes: Map<string, (request: Request) => Response>;

  constructor() {
    this.routes = new Map();
    this.loadRoutes();
  }

  static initialize(): Router {
    return new this();
  }

  public handle(request: Request): Response {
    const url = new URL(request.url);
    const path = url.pathname;
    const routeHandler = this.routes.get(path);
    let response;

    if (routeHandler) {
      response = routeHandler(request);
    } else {
      response = new Response("Not Found", { status: 404 });
    }

    return response;
  }

  private loadRoutes() {
    for (const route of Routes) {
      this.routes.set(route.getPath(), (request: Request) => route.handle(request));
    }
  }
}
