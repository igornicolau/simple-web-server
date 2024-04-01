import AbstractRoute from "./AbstractRoute.ts";

class PetRoute extends AbstractRoute {
  constructor() {
    super(
      "/pet",
      new Map([
        [
          "GET",
          () => {
            return new Response("Ayla", { status: 200 });
          },
        ],
      ])
    );
  }

  public handle(request: Request): Response {
    const method = this.handlers.get(request.method);
    let response;
    if (method) {
      response = method();
    } else {
      response = new Response("Not Found", { status: 404 });
    }

    return response;
  }
}

export default new PetRoute();
