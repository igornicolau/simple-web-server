import AbstractRoute from "./AbstractRoute.ts";
import nameHandler from "../handlers/NameHandler.ts";

class NameRoute extends AbstractRoute {
  constructor() {
    super("/name", [
      { method: "GET", function: () => nameHandler.findAll() },
      {
        method: "POST",
        function: (request: Request) => nameHandler.create(request),
      },
    ]);
  }
}

export default new NameRoute();
