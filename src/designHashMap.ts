export class MyHashMap {
  private obj: { [key: number]: number };
  constructor() {
    this.obj = {};
  }

  put(key: number, value: number): void {
    this.obj[key] = value;

    console.log(this.obj[key]);
  }

  get(key: number): number {
    if (this.obj[key] !== undefined) {
      return this.obj[key];
    } else {
      return -1;
    }
  }

  remove(key: number): void {
    delete this.obj[key];
  }
}

export class MyHashMapSimpleSolution {
  private map: Map<number, number>;
  constructor() {
    this.map = new Map<number, number>();
  }

  put(key: number, value: number): void {
    this.map.set(key, value);
  }

  get(key: number): number {
    const value = this.map.get(key);
    if (value !== undefined) {
      return value;
    } else {
      return -1;
    }
  }

  remove(key: number): void {
    this.map.delete(key);
  }
}
