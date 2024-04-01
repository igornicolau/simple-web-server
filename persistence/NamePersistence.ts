export class NamePersistence {
  private names: string[];

  constructor() {
    this.names = [];
  }

  public findAll(): string[] {
    return this.names;
  }

  public create(name: string) {
    this.names.push(name);
  }
}

export const singleton = new NamePersistence();
