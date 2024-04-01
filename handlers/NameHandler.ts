import {
  NamePersistence,
  singleton as namePersistence,
} from "../persistence/NamePersistence.ts";

type CreateName = {
  name: string;
};

class NameHandler {
  private persistence: NamePersistence;

  constructor() {
    this.persistence = namePersistence;
  }
  public findAll(): Response {
    const names = this.persistence.findAll();
    const body = {
      names,
    };
    return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async create(request: Request): Promise<Response> {
    let { name } = (await request.json()) as CreateName;
    this.persistence.create(name);
    return new Response(undefined, { status: 201 });
  }
}

export default new NameHandler();
