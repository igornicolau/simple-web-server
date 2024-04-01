type CreateName = {
  name: string;
};

class NameHandler {
  private names!: string[];

  constructor() {
    this.names = [];
  }
  public findAll(): Response {
    const body = {
      names: this.names,
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
    this.names.push(name);
    return new Response(undefined, { status: 201 });
  }
}

export default new NameHandler();
