export class HashTable {
  #data;
  #valueIndex = 1;

  constructor(size) {
    this.#data = Array(size);
  }

  #hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.#data.length;
    }

    return hash;
  }

  set(key, value) {
    const address = this.#hash(key);

    if (!this.#data[address]) this.#data[address] = [];

    this.#data[address].push([key, value]);
  }

  get(key) {
    const address = this.#hash(key);
    const bucket = this.#data[address];

    if (bucket)
      return bucket.find(([pairKey]) => pairKey === key)?.[this.#valueIndex];
  }

  keys() {
    const keys = [];

    for (const bucket of this.#data) {
      if (bucket) {
        for (const [key] of bucket) keys.push(key);
      }
    }

    return keys;
  }
}
