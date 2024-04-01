import { HttpMethod } from "./../enums/HttpMethod.ts";

export type MethodHandler = {
  method: string;
  function: (request: Request) => Response | Promise<Response>;
};

export default abstract class AbstractRoute {
  protected path: string;

  protected handlers: Map<HttpMethod, (request: Request) => Response>;

  constructor(path: string, handlers: MethodHandler[]) {
    this.path = path;
    this.handlers = this.createHandlersMap(handlers);
  }

  public getPath() {
    return this.path;
  }

  public handle(request: Request): Response {
    const method = this.handlers.get(request.method as HttpMethod);
    let response;
    if (method) {
      response = method(request);
    } else {
      response = new Response("Not Found", { status: 404 });
    }

    return response;
  }

  private createHandlersMap(handlers: MethodHandler[]) {
    const map = new Map();
    handlers.forEach((handler) => {
      map.set(handler.method, handler.function);
    });
    return map;
  }
}
