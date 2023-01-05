class CustomData {
  constructor(private data: number[]) {}

  public getIterator() {
    return new CustomIterator(this.data);
  }
}

class CustomIterator {
  private index = 0;

  constructor(private data: number[]) {}

  next() {
    if (this.hasNext()) {
      return {
        value: this.data[this.index++],
        done: false,
      };
    }
    return {
      value: undefined,
      done: true,
    };
  }

  hasNext() {
    return this.index < this.data.length;
  }

  [Symbol.iterator]() {
    return this;
  }
}

const data = new CustomData([1, 2, 3, 4, 5]);
const iterator = data.getIterator();

for (const item of iterator) {
  console.log(item);
}

function* generator() {
  yield 11;
  yield 22;
  yield 33;
  yield* [44, 55, 66];
}

const iterator2 = generator();
for (const item of iterator2) {
  console.log(item);
}

export default {};
