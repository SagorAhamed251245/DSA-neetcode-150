export function MyHashSet() {
  return class {
    private obj: Set<number>;
    constructor() {
      this.obj = new Set<number>();
    }

    add(key: number): void {
      this.obj.add(key);
    }

    remove(key: number): void {
      this.obj.delete(key);
    }

    contains(key: number): boolean {
      if (this.obj.has(key)) return true;

      return false;
    }
  };
}
