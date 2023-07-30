export class LinkedList {
  #head = null;
  #tail = null;
  #length = 0;

  append(value) {
    const node = { value, next: null };
    this.#length++;

    if (!this.#head) {
      this.#head = node;
      this.#tail = this.#head;

      return;
    }

    this.#tail.next = node;
    this.#tail = node;
  }

  prepend(value) {
    const node = { value, next: null };
    this.#length++;

    if (!this.#head) {
      this.#head = node;
      this.#tail = this.#head;

      return;
    }

    node.next = this.#head;
    this.#head = node;
  }

  toString() {
    return JSON.stringify(
      {
        head: this.#head,
        tail: this.#tail,
        length: this.#length,
      },
      null,
      2
    );
  }
}
