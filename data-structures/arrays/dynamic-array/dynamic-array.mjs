export class _Array {
  #length = 0;
  #data = Object.create(null);

  #deleteLastItem() {
    delete this.#data[this.#length - 1] && this.#length--;
  }

  #shiftItems(index) {
    for (let i = index; i < this.#length - 1; i++) {
      this.#data[i] = this.#data[i + 1];
    }

    this.#deleteLastItem();
  }

  get length() {
    return this.#length;
  }

  access(index) {
    return this.#data[index];
  }

  push(item) {
    this.#data[this.#length] = item;

    return ++this.#length;
  }

  pop() {
    const lastItem = this.#data[this.#length - 1];
    this.#deleteLastItem();

    return lastItem;
  }

  delete(index) {
    const item = this.#data[index];
    this.#shiftItems(index);

    return item;
  }
}
